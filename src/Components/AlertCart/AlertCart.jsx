import React, { useState, useEffect } from "react";
import {
    Box,
    Alert,
    AlertDescription,
    Flex,
} from '@chakra-ui/react'
import { TimeIcon } from '@chakra-ui/icons'
import { orderInProgress } from "../../services/users";

export const AlertCart = () => {
    const [order, setOrder] = useState()

    useEffect(() => {
        orderInProgress().then((res) => setOrder(res.data.order))
    }, [])

return (
    <div>
        <Alert status='success' background='#e8222e'>
            <TimeIcon color='#fff' w={6} h={6} />
            <Box marginLeft={5}>
                <Flex
                    display="flex"
                    align='start'
                    flexDirection="column"
                    justifyContent="space-between">
                    <AlertDescription fontWeight={400} color='#fff'>Pedidos em andamento</AlertDescription>
                    <AlertDescription fontWeight={450} color='#000'> {order && order.restaurantName}</AlertDescription>
                    <AlertDescription fontWeight={700} color='#000'>SUBTOTAL {order&& order.totalPrice?.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</AlertDescription>
                </Flex>
            </Box>
        </Alert>
    </div>
)
}