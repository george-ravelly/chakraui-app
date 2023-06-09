import { Box, Text, Grid, GridItem, Image, SkeletonCircle, SkeletonText } from "@chakra-ui/react";
import React from "react";
import ItemBox from "../ItemBox";

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
                <ItemBox item={item} />
            </GridItem>
        ));
    }

    return (
        <Grid templateColumns='repeat(3, 1fr)' gap={2} mt={5}>
            {getResults()}
        </Grid>
    );
}