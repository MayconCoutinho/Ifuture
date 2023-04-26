import React from "react";
import {Flex,Text} from "@chakra-ui/react";
import { ChevronLeftIcon } from '@chakra-ui/icons'
import SignAddressForm from "./SignAddressForm";
import BarraNavegacao from "../../Components/SearchBar/SearchBar";
import { useNavigate } from "react-router-dom";
import { goToLastPage } from "../../Routes/Coordinator";

const SignAddressPage = () => {
  const navigate = useNavigate();

  return (
    <div>
     <Flex align={"center"} m={2} justifyContent={"space-between"}>
        <ChevronLeftIcon
          ml={2}
          w={8}
          h={8}
          onClick={() => goToLastPage(navigate)}
        />
        <Text fontWeight={750}>Meu endereço</Text>
       <Flex w={'40px'}></Flex>
      </Flex>
      <Flex
        w="auto"
        mb={5}
        borderRadius="5px"
        h="1px"
        bgColor="lightgray"
        display="flex"
      />
      <SignAddressForm />
      {BarraNavegacao(false,false, false)}
    </div>
  );
};

export default SignAddressPage;