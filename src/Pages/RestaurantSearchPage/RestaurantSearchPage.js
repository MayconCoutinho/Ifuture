import { React, useState, useEffect } from 'react'
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../constants/url";
import { Box, Flex, HStack, Text, Divider } from "@chakra-ui/react"
import { Input } from '@chakra-ui/react'
import SearchBar from "../../Components/SearchBar/SearchBar";
import useProtectedPage from "../../hooks/useProtectedPage";

import { irParaDetalhesRestaurante } from "../../Routes/Coordinator"


const RestaurantSearchPage = () => {
  useProtectedPage()
  const navigate = useNavigate()
  const [restaurantes, setRestaurantes] = useState([])
  const [buscaRestaurante, setBuscaRestaurante] = useState("")

  const getRestaurante = () => {

    const headers = {
      headers: {
        auth: localStorage.getItem('token'),
      }
    }
    axios.get(`${BASE_URL}/restaurants`, headers)
      .then((res) => {
        setRestaurantes(res.data.restaurants);
      })
      .catch((err) => {
        console.log(err);
      })
  }
  useEffect(() => {
    getRestaurante()
  }, [])

  const filtrandoRestaurantes = restaurantes.filter((restaurante) => {
    if (buscaRestaurante == "") {
      return restaurante
    } else if (restaurante.name.toLowerCase().includes(buscaRestaurante.toLowerCase())) {
      return restaurante
    }
  })

    .map((restaurante) => {
      return (
        <Box
          marginBottom={2}
          display='flex'
          flexDirection='column'
          justifyContent='center'
          width='100%'
          border='1px solid #b8b8b8'
          borderRadius="10px 10px"
          key={restaurante.id}
          onClick={() => irParaDetalhesRestaurante(navigate, restaurante.id)}

          bg='#FBFBFB'
          boxShadow='2px 2px 2px 1px rgba(0, 0, 0, 0.1)'
        >
          <Box
            width='100%'
            maxW='328px'
            height='120px'
            backgroundSize={'cover'}
            backgroundPosition='center'
            backgroundImage={restaurante.logoUrl}
            borderTopRadius='10px 10px'
          />
          <Box padding='16px'
          >
            <Box fontWeight='semibold' as='h3' color='red'>{restaurante.name}</Box>
            <Box display='flex' justifyContent='space-between' color='#aaaaaa'>
              <p>{restaurante.deliveryTime} - { (  Math.round( restaurante.deliveryTime * 0.30 ) + restaurante.deliveryTime )} min</p>
              <p>Frete: {restaurante.shipping.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</p>
            </Box>
          </Box>
        </Box>
      )
    })

  return (
    <div>
      <Box marginBottom={20}>
      <HStack justify="center" padding={2}>
        <HStack justify="center" padding={2}>
          <Text fontSize='md' fontWeight={600} fontFamily='heading' color='#646464'> Pesquisar </Text>
        </HStack>
        <Divider marginTop={2} padding={.3} background='#a3a3a3'></Divider>
      </HStack>
      <Flex
        direction='column'
        align='center'
        width='100vw'
        padding='16px'
      >
        <Input
          size='md' type="text"
          placeholder="Pesquisar por Restaurante"
          onChange={(event) => {
            setBuscaRestaurante(event.target.value)
          }} />
        <br /><br />
        <Flex
          direction='column'
          align='center'
          width='100%'
          maxW='328px'
          gap='8px'
        >
          {filtrandoRestaurantes}
        </Flex>
      </Flex>
      </Box> 
      <SearchBar/>
    </div>

  )
}

export default RestaurantSearchPage