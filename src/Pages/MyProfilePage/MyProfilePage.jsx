import { useState } from "react";
import { BASE_URL } from "../../constants/url";
import CardOrder from "../../Components/CardOrder/CardOrder";
import edit from "../../assets/edit.png";
import useRequestData from "../../hooks/useRequestData";
import useProtectedPage from "../../hooks/useProtectedPage";
import BarraNavegacao from "../../Components/SearchBar/SearchBar";
import { Flex, Text, Image, Button } from "@chakra-ui/react";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import {
  goToEditPage,
  goToSignAddress,
  goToLastPage,
  goToLoginPage,
} from "../../Routes/Coordinator";

export default function MyProfilePage() {

  useProtectedPage();
  const navigate = useNavigate();
  const getProfile = useRequestData([], `${BASE_URL}/profile`);
  const UserData = getProfile.user && getProfile.user;
  const getHistory = useRequestData([], `${BASE_URL}/orders/history`);
  const History = getHistory.orders && getHistory.orders;
  const token = localStorage.getItem("token");
  const [loginLogout, setLoginLogout] = useState(token ? "Logout" : "Login");

  const logout = () => {
    localStorage.removeItem("token");
  };

  const buttonLoginLogout = () => {
    if (token) {
      logout();
      setLoginLogout("Login");
      goToLoginPage(navigate);
    } else {
      goToLoginPage(navigate);
    }
  };
 const convertMonth = (month) => {
    switch(month){
        case 1:
            return "Janeiro"
        case 2:
            return "Fevereiro"
        case 3:
            return "Março"
        case 4:
            return "Abril"
        case 5:
            return "Maio"
        case 6:
            return "Junho"
        case 7:
            return "Julho"
        case 8:
            return "Agosto"
        case 9:
            return "Setembro"
        case 10:
            return "Outubro"
        case 11:
            return "Novembro"
        case 12:
            return "Dezembro"
        default:
            return "Error"
    }
}

  const cDate = (dateOfOrder) => {
    const date = new Date(dateOfOrder)
    return `${date.getDate()} de ${convertMonth(date.getMonth()+1)} de ${date.getFullYear()}`
}

  const CardHistory =
    History &&
    History.map((order, i) => {
      const date = cDate(order.createdAt)
      return (
        <CardOrder
          key={i}
          name={order.restaurantName}
          date={date}
          price={order.totalPrice.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        />
      );
    });

  return (
    <Flex   flexDirection={"column"} pb={"50px"}>
      < Flex align={"center"} m={2} justifyContent={"space-between"}>
        <ChevronLeftIcon
          pl={2}
          w={8}
          h={8}
          onClick={() => goToLastPage(navigate)}
        />

        <Text fontWeight={750}>Meu Perfil</Text>
        <Button
          boxShadow="2px 2px 2px 1px rgba(0, 0, 0, 0.1)"
          size={'xs'}
          fontWeight={500}
          mr={2}
          color={' white'}
          bgColor={"#E8222E"}
          _active={{
            bgColor: "#E8222E",
            color: ' white',
            transform: "scale(0.98)",
          }}
          _focus={{
            boxShadow:
              '0 0 1px 2px rgba(232, 34, 47, 0.75), 0 1px 1px rgba(0, 0, 0, .15)',
          }}
          onClick={buttonLoginLogout}
        >
          {loginLogout}
        </Button>
      </Flex>

      <Flex
        w="auto"
        mb={5}
        borderRadius="5px"
        h="1px"
        bgColor="lightgray"
        display="flex"
      />
      <Flex
        m={2}
        p={3}
        borderRadius={14}
        _active={{ bg: "#f1f1f1" }}
        justifyContent="space-between"
        onClick={() => goToEditPage(navigate)}
      >
        <Flex
          align="start"
          flexDirection="column"
          justifyContent="space-between"
        >
          <Text mb={2} color="#B8B8B8">
            Dados Cadastrados
          </Text>
          <Text>{UserData?.name}</Text>
          <Text>{UserData?.email}</Text>
          <Text>{UserData?.cpf}</Text>
        </Flex>
        <Image src={edit} mt={''} w={6} h={6} alt="Botão-Editar" />
      </Flex>
      <Flex
        m={2}
        p={3}
        alignItems="center"
        borderRadius={14}
        justifyContent="space-between"
        _active={{ bg: "#f1f1f1" }}
        onClick={() => goToSignAddress(navigate)}
      >
        <Flex mt="10px" align="start" flexDirection="column">
          <Text mb={2} color="#B8B8B8">
            Endereço Cadastrado
          </Text>
          <Text>{UserData?.address}</Text>
        </Flex>
        <Image src={edit} w={6} h={6} alt="Botão-Editar" />
      </Flex>
      <Text pl={2} p={4} color="#B8B8B8">
        Historico de compras
      </Text>
      <Flex
        w="auto"
        ml={3}
        mr={3}
        mb={3}
        borderRadius="5px"
        h="3px"
        bgGradient="linear(to-r, #080808,#E8222E )"
        flexDirection="column"
        display="flex"
      />

      <Flex flexWrap="wrap" justifyContent={"center"}>
      {(CardHistory && CardHistory !=0 ) || ((CardHistory && CardHistory == 0 && CardHistory == null )) ?CardHistory:<Text mt="3" ml="3">Você não realizou nenhum pedido</Text>}
      </Flex>
      {BarraNavegacao(false, false, true)}
    </Flex>



  );
}
