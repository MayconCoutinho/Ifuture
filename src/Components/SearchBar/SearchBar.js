import { Flex, Image, SimpleGrid,} from "@chakra-ui/react";
import home from "../../assets/home.png";
import homeRed from "../../assets/homeRed.png";
import carrinho from "../../assets/carrinho.png";
import carrinhoRed from "../../assets/carrinhoRed.png";
import avatar from "../../assets/avatar.png";
import avatarRed from "../../assets/avatarRed.png";
import { useNavigate } from "react-router-dom";
import { goToFeedPage , goToCartPage, goToProfilePage} from "../../Routes/Coordinator";
import { useState } from "react";

const BarraNavegacao = ( iconHome, iconCart, iconAvatar ) => {
  const navigate = useNavigate();

  return (
    <SimpleGrid
      columns={3}
      h="50px"
      bg="white"
      py="1em"
      borderTop={"1px"}
      borderColor="lightgray"
      w="full"
      position={'fixed'}
      bottom={'0'}
      >
      <Flex justify={"center"}>
        <Image
          src={iconHome === true ? homeRed : home }
          onClick={() => goToFeedPage(navigate)}
          width="27px"
          height="27px"
        />
      </Flex>
      <Flex justify={"center"}>
        <Image
          src={iconCart === true ? carrinhoRed : carrinho }
          onClick={() => goToCartPage(navigate)}
          width="27px"
          height="27px"
        />
      </Flex>
      <Flex justify={"center"}>
        <Image
          src={iconAvatar === true ? avatarRed : avatar }
          onClick={() => goToProfilePage(navigate)}
          width="27px"
          height="27px"
        />
      </Flex>
    </SimpleGrid>
  );
};
export default BarraNavegacao;
