import React, { useContext } from "react";
import { CardCart } from "../../Components/CardCart/CardCart";
import { PayCart } from "../../Components/PayCart/PayCart";
import { UserAddressCart } from "../../Components/UserAddressCart/UserAddressCart";
import { RestaurantCart } from "../../Components/RestaurantCart/RestaurantCart";
import useProtectedPage from "../../hooks/useProtectedPage";
import { BASE_URL } from "../../constants/url";
import useRequestData from "../../hooks/useRequestData";
import { Flex, Text } from "@chakra-ui/react";
import GlobalContext from "../../Global/GlobalContext";
import BarraNavegacao from "../../Components/SearchBar/SearchBar";

function CartPage() {
  useProtectedPage()

  const { states } = useContext(GlobalContext);
  const { carrinho } = states;

  const restaurantData = states && states.detalhes?.restaurant
  const getProfile = useRequestData([], `${BASE_URL}/profile`);
  const Useraddress = getProfile.user?.address && getProfile.user?.address;
  const priceSum = carrinho && carrinho.map(item => item.price).reduce((prev, curr) => prev + curr, 0);

  return (
    <>
    {UserAddressCart(Useraddress)}
    <Flex
      direction="column"
      align="center"
      width="100vw"
      padding="16px"
      marginBottom="50px"
      fontFamily={"'Roboto', sans-serif"}
    >

      {carrinho && carrinho.length > 0 ?
        <>
          {restaurantData && (
            <RestaurantCart
              name={restaurantData.name}
              address={restaurantData.address}
              deliveryTime={restaurantData.deliveryTime}
            />
          )}
          <Flex
            direction="column"
            align="flex-start"
            width="100%"
            maxW="328px"
            gap="8px"
          >


            {carrinho && carrinho.map((_, index) => (
              <CardCart
                key={index}
                name={carrinho[index].name}
                description={carrinho[index].description}
                price={carrinho[index].price}
                photoUrl={carrinho[index].photoUrl}
                number={carrinho[index].quantity}
                id={carrinho[index].id}
              />

            ))}
          </Flex>
        </>
        : <Text marginTop={150}> Carrinho Vazio </Text>}

      {
        <PayCart shipping={carrinho.length > 0 ? restaurantData.shipping : 0} totalSum={carrinho.length > 0 ? priceSum + restaurantData.shipping : 0} />
      }
      {BarraNavegacao(false, true, false)}
    </Flex>

    </>

  )
}

export default CartPage;


