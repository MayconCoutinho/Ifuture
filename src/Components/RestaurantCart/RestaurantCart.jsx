import React from "react";
import {
    Text,
    HStack,
    Box,
} from '@chakra-ui/react'

export const RestaurantCart = ({name, address, deliveryTime}) => {

    return (
  
            <Box marginTop={3} marginBottom='20px' >
                <HStack marginLeft={3} >
                    <Text fontSize='md' fontWeight={700} color='#E8222E' > {name} </Text>
                </HStack>

                <HStack marginLeft={3}>
                    <Text fontSize='md' fontWeight={400} color='#b8b8b8'> {address}</Text>
                </HStack>

                <HStack marginLeft={3}>
                    <Text fontSize='md' fontWeight={400} color='#b8b8b8'> {deliveryTime} - { deliveryTime + Math.round(deliveryTime * 0.30)} min </Text>
                </HStack>
            </Box>

    )}