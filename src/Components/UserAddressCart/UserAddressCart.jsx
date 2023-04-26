import React from "react";
import {
    Text,
    HStack,
    Box,
} from '@chakra-ui/react'

export const UserAddressCart = (address) => {

    return (
        <>
            <HStack justify="center" padding={2}>
                <Text fontSize='md' fontWeight={600} fontFamily='heading' color='#979797' > Meu Carrinho </Text>
            </HStack>

            <Box background='#e0e0e0' padding={2}>
                <HStack marginLeft={3} >
                    <Text fontSize='md' fontWeight={400} color='#8a8a8a'> Endereço de entrega </Text>
                </HStack>
                <HStack marginLeft={3} >
                    <Text fontWeight={600} fontSize='md' > {address} </Text>
                </HStack>
            </Box>
        </>
    )

}