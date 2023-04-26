import React, { useContext } from "react";
import {
    Button,
    Text,
    HStack,
    Box,
    Image,
    Flex
} from '@chakra-ui/react'
import GlobalContext from "../../Global/GlobalContext";

export const CardCart = ({ name, description, price, photoUrl, number, id }) => {
    const { setters } = useContext(GlobalContext);
    const { setCarrinho } = setters;

    const onClickRemoverProduto = (id) => {
        setCarrinho(prev => {
            let newCart = [...prev]
            return newCart.filter((item) => item.id !== id)
        })
    };

    return (
        <Flex
            width='100%'
            border='1px solid #b8b8b8'
            borderRadius="10px 10px"
            bg='#FBFBFB'
            boxShadow='2px 2px 2px 1px rgba(0, 0, 0, 0.1)'
        >
            <Box
                minW='96px'
                borderRadius='8px 0 0 8px'
                backgroundSize={'cover'}
                backgroundPosition='center'
                backgroundImage={photoUrl}
            />
            <Flex direction='column' maxWidth='232px' grow='1'>   
                <Box display='flex' justifyContent='flex-end' width='100%'>
                    <Box
                        as='button'
                        width='40px'
                        height='40px'
                        fontSize='12px'
                        position='relative'
                        left='1px'
                        cursor='auto'
                  
                        borderTopRightRadius={8}
                        borderBottomLeftRadius={8}
                        background='#E8222E'
            
                        color='#fff'> {number || 0}
                    </Box>
                </Box>

                <Flex direction='column' padding='0 16px' width='100%'>
                    <Box fontWeight='semibold' as='h3' color='#ff0000' marginTop='30px' marginBottom='8px'>
                        {name}
                    </Box>
                    <Box fontSize='12px' color='#6d6d6d' height='30px' marginBottom='4px' as='span'>
                        {description}
                    </Box>
                    <Box fontWeight='semibold' as='h3'>
                        {price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                    </Box>
                </Flex>

                <Box display='flex' justifyContent='flex-end' width='100%'>
                    <Box
                        onClick={() => onClickRemoverProduto(id)}
                        as='button'
                        width='90px'
                        height='30px'
                        borderRadius='8px 0 8px 0'
                        fontSize='12px'
                        position='relative'
                        left='1px'
                        bottom='-1px'
                        borderTopLeftRadius={10}
                        borderBottomLeftRadius={0}
                        borderBottomRightRadius={10}
                        borderTopRightRadius={0}
                        marginTop={3}
                        background='#E8222E'
                        _hover={{ bg: '#97030d' }}
                        color='#fff'> remover
                    </Box>
                </Box>


            </Flex>
        </Flex>

    )

}