import { Box, Flex, Grid, GridItem, Image, SkeletonCircle, SkeletonText } from "@chakra-ui/react";
import React from "react";

export default function SearchBox(props) {
    function gridItem() {
        const grid = [1, 2, 3];
        return grid.map(item => (
            <GridItem w='100%' key={item}>
                <Box padding='6' boxShadow='lg' bg='white'>
                    <SkeletonCircle size='10' />
                    <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
                </Box>
            </GridItem>
        ))
    }

    function getResults() {
        const {data, isLoading} = props;

        if (isLoading) return gridItem();
        if (data.length === 0) return <></>
        return data.map(item => (
            <GridItem w='100%' key={item.id}>
                <Image src={item?.volumeInfo?.imageLinks?.smallThumbnail ? item?.volumeInfo?.imageLinks?.smallThumbnail : getNoImages()} alt='books'/>
                {item.volumeInfo.title}
            </GridItem>
        ));
    }

    const getNoImages = () => 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.elo7.com.br%2Fplaca-decorativa-os-incriveis-sem-capa-30x20cm%2Fdp%2FC26C46&psig=AOvVaw1FMhLHX8L0n3HKIhYIfi6Y&ust=1680789113339000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCPDEusLxkv4CFQAAAAAdAAAAABAE';

    return (
        <Grid templateColumns='repeat(3, 1fr)' gap={2}>
            {getResults()}
        </Grid>
    );
}