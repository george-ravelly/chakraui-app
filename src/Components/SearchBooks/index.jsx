import React, { useState } from "react";

import {
    FormControl,
    IconButton,
    Input,
    Flex
} from '@chakra-ui/react'
import { Search } from "react-feather";
import SearchBox from "../SearchBox";


export default function SearchBooks () {
    const [ searchText, setSearchText ] = useState('');
    const [ isLoading, setIsLoading ] = useState(false);
    const [ data, setData ] = useState([]);

    const handleSearch = (e) => {
        e.preventDefault();
        setIsLoading(true);
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchText}`)
          .then(res => res.json())
          .then(data => {
                setData(data.items);
                setIsLoading(false);
            })
    }

    return (
        <>
            <form onSubmit={(e) => handleSearch(e)}>
                <FormControl>
                    <Flex>
                        <Input 
                            placeholder='Harry Potter...'
                            w={1000}
                            mr={1}
                            value={searchText}
                            onChange={(e) => setSearchText(e.target.value)}
                        />
                        {/* <FormHelperText>Digite qualquer nome.</FormHelperText> */}
                        <IconButton 
                            aria-label='Search database'
                            colorScheme='blue'
                            type="submit"
                            icon={<Search />}
                            onClick={(e) => handleSearch(e)}
                        />
                    </Flex>
                </FormControl>
            </form>
            <SearchBox data={data} isLoading={isLoading}/>
        </>
    )
}