import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
    Button,
    Text,
    HStack,
    Box,
    Divider,
    Stack,
    Radio,
    RadioGroup,
} from '@chakra-ui/react'
import { confirmingPurchase } from "../../services/users";
import GlobalContext from "../../Global/GlobalContext";

export const PayCart = ({ shipping, totalSum }) => {
    const { setters, states } = useContext(GlobalContext);
    const { carrinho,  } = states;
    const { setCarrinho } = setters;

    const navigate = useNavigate();

    const [value, setValue] = useState('')

    const checkout = () => {
        const products = carrinho.map(product => ({ id: product.id, quantity: product.quantity }))

        const item = {
            products,
            "paymentMethod": value
        }

        confirmingPurchase(item, localStorage.getItem("IdCardDetail"))
            .then(() => {
                navigate('/feed')
                setCarrinho([])
            })
            .catch((err) => alert(err.response.data.message))
    }
    
    return (
        <>
            <Text marginLeft='225px' fontWeight={600} fontSize='md' marginTop={8} > Frete {shipping.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) || 'R$ 0,00'} </Text>

            <HStack  display="flex" flexDir="row" gap='180px' marginBottom={5}>
                <Text fontWeight={600} fontSize='md' > SUBTOTAL  </Text>
                <Text fontSize='md' fontWeight={700} color='#E8222E'  > {totalSum.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) || 'R$ 0,00'} </Text>
            </HStack>

            <Text marginLeft={2} fontWeight={600} fontSize='md'> Forma de pagamento  </Text>

            <Divider marginTop={2} marginBottom={2} padding={.9} background='#000'></Divider>

            <Box marginRight='180px' display="flex" flexDir="column" gap="2" marginBottom={4}>

                <RadioGroup onChange={setValue} value={value}>
                    <Stack>
                        <Radio fontSize='14' fontWeight={400} colorScheme='red' borderRadius={0} value='money'> Dinheiro </Radio>
                        <Radio fontSize='14' fontWeight={400} colorScheme='red' borderRadius={0} value='creditcard'> Cartão de crédito</Radio>
                    </Stack>
                </RadioGroup>
            </Box>

            <HStack justify="center" display="flex" flexDir="column" marginBottom={20} marginTop={10}>
                <Button
                    background='#E8222E'
                    color='#fff'
                    minWidth={350}
                    variant='solid'
                    _hover={{ bg: '#97030d' }}
                    onClick={() => carrinho && carrinho.length > 0 ? checkout() : alert('Seu Carrinho esta vazio')} > Confirmar </Button>
            </HStack>
        </>
    )
}
