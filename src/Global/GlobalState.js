import React, { useState } from 'react'
import axios from 'axios'
import GlobalContext from './GlobalContext'

const GlobalState = (props) => {

  const [restaurantes, setRestaurantes] = useState([])
  const [detalhes, setDetalhes] = useState({})
  const [carrinho, setCarrinho] = useState([])
  const [pedidos, setPedidos] = useState([])
  const [pedidoEmAndamento, setPedidoEmAndamento] = useState(false)
  const [detalhesPedido, setDetalhesPedido] = useState(null)

  const pegarRestaurantes = () => {
    const token = localStorage.getItem("token")
    const headers = { headers: { auth: token } }

    axios
     .get("https://us-central1-missao-newton.cloudfunctions.net/fourFoodA/restaurants", headers)
     .then((res) => {
      setRestaurantes(res.data.restaurants)
     })
     .catch((err) => {console.log(err.response)})
  }

  const pegarDetalhes = (id) => {
    const token = localStorage.getItem("token")
    const headers = { headers: { auth: token } }

    axios
      .get(`https://us-central1-missao-newton.cloudfunctions.net/fourFoodA/restaurants/${id}`, headers)
      .then((res) => {
        setDetalhes(res.data)
      })
      .catch((err) => { console.log(err.response) } )
  }


  const states = {restaurantes, detalhes, carrinho, pedidos, pedidoEmAndamento, detalhesPedido}
  const setters = {setRestaurantes, setDetalhes, setCarrinho, setPedidos, setPedidoEmAndamento, setDetalhesPedido}
  const requests = {pegarRestaurantes, pegarDetalhes}

  
  return (
    <GlobalContext.Provider value={{states, setters, requests}}>
      {props.children}
    </GlobalContext.Provider>
  )
}
export default GlobalState