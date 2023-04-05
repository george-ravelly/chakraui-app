import React from "react";
import {
    Container, Text, Heading
} from '@chakra-ui/react'

export default function Header() {
    return (
        <header>
            <Container p={4}>
                <Heading align={'center'}>
                    Pesquisar livros
                </Heading>
            </Container>
        </header>
    )
}