import React from "react";

import {
    Container,
} from '@chakra-ui/react'
import SearchBooks from "../../Components/SearchBooks";

export default function Home(props) {
    return (
        <Container maxW='container.sm'>
            <SearchBooks />
        </Container>
    )
}