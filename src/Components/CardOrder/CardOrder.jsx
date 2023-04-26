import { Flex, Text } from "@chakra-ui/react";

const CardHistoric = (props) => {
  return (
    <Flex
      align="start"
      w={280}
      h="6.375rem"
      m={3}
      mb={3}
      
      boxShadow="2px 2px 2px 1px rgba(0, 0, 0, 0.1)"
      border="1px solid #b8b8b8"
      borderRadius={8}
      flexDirection="column"
      
    >
      <Text color="#e8222e " fontWeight={500} ml={6} mt={1}>
        {props.name}
      </Text>
      <Text color="000 " fontWeight={300} ml={6} mt={1}>
        {props.date}
      </Text>
      <Text ml={6} mt={3} fontWeight={750} fontSize="md">
        {" "}
        SUBTOTAL {props.price}
      </Text>
    </Flex>
  );
};

export default CardHistoric;
