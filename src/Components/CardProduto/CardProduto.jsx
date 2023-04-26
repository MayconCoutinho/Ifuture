import { Box, Flex } from "@chakra-ui/react"
import React from "react"

const CardProduto = (props) => {
  return (
    <Flex
      width='100%'
      key={props.id}
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
        backgroundImage={props.photoUrl}
      />
      <Flex direction='column' maxWidth='232px' grow='1'>

        <Flex direction='column' padding='0 16px' width='100%'>
          <Box fontWeight='semibold' as='h3' color='#ff0000' marginTop='30px' marginBottom='8px'>
            {props.name}
          </Box>
          <Box fontSize='12px' color='#6d6d6d' height='30px' marginBottom='4px' as='span'>
            {props.description}
          </Box>
          <Box fontWeight='semibold' as='h3'>
            {props.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
          </Box>
        </Flex>
        {
          props.idProdutos.includes(props.id) ?
            (<Box display='flex' justifyContent='flex-end' width='100%'>
              <Box
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
                color='#fff'

                onClick={props.onClickRemoverProduto}
              >
                remover
              </Box>
            </Box>) :
            (<Box display='flex' justifyContent='flex-end' width='100%'>
              <Box
                as='button'
                width='90px'
                height='30px'
                border='1px solid #262626'
                borderRadius='8px 0 8px 0'
                fontSize='12px'
                position='relative'
                left='1px'
                bottom='-1px'
                onClick={props.onAddProduct}


                borderTopLeftRadius={10}
                borderBottomLeftRadius={0}
                borderBottomRightRadius={10}
                borderTopRightRadius={0}
                marginTop={3}
                background='#000000'
                _hover={{ bg: '#272727' }}
                color='#fff'
              >
                adicionar
              </Box>
            </Box>)
        }

      </Flex>
    </Flex>
  )
}
export default CardProduto