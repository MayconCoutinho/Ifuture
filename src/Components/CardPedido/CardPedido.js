import axios from "axios"
import { useEffect, useContext } from "react"
import { BASE_URL } from "../../constants/url"
import GlobalContext from "../../Global/GlobalContext"
import "./style.css"



const CardPedido = () => {

    const { states, setters} = useContext(GlobalContext)
    const { detalhesPedido, pedidoEmAndamento } = states
    const { setDetalhesPedido, setPedidoEmAndamento } = setters

    useEffect(()=>{
        if(detalhesPedido === null){
            pegarPedidoAtivo()
         }
    }, [])

    const pegarPedidoAtivo = () => {
        const url = `${BASE_URL}/active-order`
        const { token } = localStorage
        axios
            .get(url, {
                headers: {
                    auth: token
                }
            })
            .then((response) => {
                if(response.data.order !== null){
                    setDetalhesPedido(response.data.order)
                    setPedidoEmAndamento(true)
                    setTimeout(() => {
                        setPedidoEmAndamento(false)
                    }, response.data.order.expiresAt - Date.now())
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }
    if(pedidoEmAndamento !== false){
        return(
            <div className="banner">
                <h3>Pedido em Andamento</h3>
                <p>{detalhesPedido.restaurantName}</p>
                <p>Tempo Estimado: {new Date(detalhesPedido.expiresAt).toLocaleTimeString()}</p>
                <p>Subtotal: R$ {detalhesPedido.totalPrice}</p>
            </div>
        )
    }
    return null;
}

export default CardPedido;