import {
    Box,
    Text,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverArrow,
    PopoverCloseButton,
    Portal,
    PopoverFooter,
    Image,
    Link
  } from '@chakra-ui/react'
import React from "react";
import { Link2 } from 'react-feather';
// import { Link } from 'react-feather';

export default function ItemBox({item}){
    const getNoImages = () => 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.elo7.com.br%2Fplaca-decorativa-os-incriveis-sem-capa-30x20cm%2Fdp%2FC26C46&psig=AOvVaw1FMhLHX8L0n3HKIhYIfi6Y&ust=1680789113339000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCPDEusLxkv4CFQAAAAAdAAAAABAE';

    return(
        <Popover>
            <PopoverTrigger>
                <Box style={{cursor: 'pointer'}}>
                    <Box style={{display: 'flex', justifyContent: 'center'}}>
                        <Image 
                            style={{width: 140, height: 180}}
                            src={item?.volumeInfo?.imageLinks?.smallThumbnail ? item?.volumeInfo?.imageLinks?.smallThumbnail : getNoImages()}
                            alt='books'
                        />
                    </Box>
                    <Text align={'center'}>{item.volumeInfo.title}</Text>
                </Box>
            </PopoverTrigger>
            <Portal>
                <PopoverContent>
                    <PopoverArrow />
                    <PopoverHeader>Descrição</PopoverHeader>
                    <PopoverCloseButton />
                    <PopoverBody>
                        <Text noOfLines={[1, 2, 3, 4, 5]} align={'justify'}>{item.volumeInfo.description}</Text>
                    </PopoverBody>
                    <PopoverFooter style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                        <Text color={'gray.500'} fontSize={'sm'}>
                            {item?.volumeInfo?.authors}&nbsp;<br />{new Date(item?.volumeInfo?.publishedDate).toLocaleDateString()}
                        </Text>
                        
                        <Link href={item?.volumeInfo?.infoLink} isExternal>
                            <Link2></Link2>
                        </Link>
                    </PopoverFooter>
                </PopoverContent>
            </Portal>
        </Popover>
    )
}