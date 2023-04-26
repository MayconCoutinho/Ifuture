import React from "react"
import { Tab, TabList, Tabs } from "@chakra-ui/react"

const FiltroCategoria = (props) => {
  return (
    <Tabs variant='line' colorScheme={'red'} padding='15px 0' overflowX={'scroll'} >
      <TabList>
        <Tab onClick={() => props.setCategoria("")}>Todos</Tab>
        <Tab onClick={() => props.setCategoria("Árabe")}>Árabe</Tab>
        <Tab onClick={() => props.setCategoria("Asiática")}>Asiática</Tab>
        <Tab onClick={() => props.setCategoria("Baiana")}>Baiana</Tab>
        <Tab onClick={() => props.setCategoria("Hamburguer")}>Burguer</Tab>
        <Tab onClick={() => props.setCategoria("Carnes")}>Carnes</Tab>
        <Tab onClick={() => props.setCategoria("Italiana")}>Italiana</Tab>
        <Tab onClick={() => props.setCategoria("Mexicana")}>Mexicana</Tab>
        <Tab onClick={() => props.setCategoria("Petiscos")}>Petiscos</Tab>
        <Tab onClick={() => props.setCategoria("Sorvetes")}>Sorvetes</Tab>
      </TabList>
    </Tabs>
  )
}

export default FiltroCategoria