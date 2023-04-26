import axios from "axios"
import { BASE_URL } from "../constants/url"
import { useState } from "react"


// POST -> Place Order -> Pega o id da comida, quantidade e forma de pagamento, tenho
// que usalo no final de todas as compras e soma todo os valores. '/fourFoodA/restaurants/${restaurantId}/order'


export const PostHook = (url, body) => {
  const [data, setData] = useState([])

  axios
    .post(
      `${BASE_URL}${url}`, body, { headers: { Authorization: window.localStorage.getItem("token") } }
    )
    .then((response) => {
      setData(response.data)
    })
    .catch((err) => {
      console.log(err);
    });

  return data
}