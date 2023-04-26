import { React, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Box, VStack } from "@chakra-ui/react";

import GlobalContext from "../../Global/GlobalContext";


import { irParaDetalhesRestaurante } from "../../Routes/Coordinator";

const CardRestaurante = (props) => {
  const navigate = useNavigate();
  const { states } = useContext(GlobalContext);

  return (
    <>
      <VStack
        direction='flex'
        align='flex-start'
        width='100%'
        maxW='350px'
        gap='2px'
      >
        {states.restaurantes
          .filter((restaurante) => {
            return (
              props.categoria === "" || restaurante.category === props.categoria
            );
          })
          .map((restaurante) => {
            return (
              <Box
                className="restaurant-card"
                display="flex"
                flexDirection="column"
                justifyContent="center"
                width="100%"
                key={restaurante.id}
                onClick={() =>
                  irParaDetalhesRestaurante(navigate, restaurante.id)
                }
                border='1px solid #b8b8b8'
                borderRadius="10px 10px"
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
                <Box padding="16px">
                  <Box fontWeight="semibold" as="h3" color="red">
                    {restaurante.name}
                  </Box>
                  <Box
                  marginTop={1}
                    display="flex"
                    justifyContent="space-between"
                    color='#aaaaaa'
                    >
                    <p> {restaurante.deliveryTime} - { (  Math.round( restaurante.deliveryTime * 0.30 ) + restaurante.deliveryTime ) } min</p>
                    <p>Frete: {restaurante.shipping.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</p>
                  </Box>
                </Box>
              </Box>
            );
          })}
      </VStack>
    </>
  );
};

export default CardRestaurante;
