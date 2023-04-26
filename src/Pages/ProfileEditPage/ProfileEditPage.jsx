import React from "react";
import BarraNavegacao from "../../Components/SearchBar/SearchBar";
import { goToLastPage } from "../../Routes/Coordinator";
import { useNavigate } from "react-router-dom";
import {  Flex,  Text} from "@chakra-ui/react";
import { ChevronLeftIcon } from '@chakra-ui/icons'
import EditForm from "./EditForm";

function ProfilePage() {
  const navigate = useNavigate();

  return (
    <div>
     <Flex align={'center'} m={2} justifyContent={"space-between"}>
      <ChevronLeftIcon ml={2} w={8} h={8}  onClick={() => goToLastPage(navigate)} />
      <Text  fontWeight={750} >Editar</Text>
      <Flex w={5}/>
      </Flex>
      <Flex
        w="auto"
        mb={5}
        borderRadius="5px"
        h="1px"
        bgColor="lightgray"
     />
      <EditForm />
      {BarraNavegacao(false,false, false)}
    </div>
  );
}

export default ProfilePage;
