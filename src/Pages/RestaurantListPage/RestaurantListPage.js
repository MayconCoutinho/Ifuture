import React from "react";
import { goToLastPage } from "../../Routes/Coordinator";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function RestaurantListPage() {
  const navigate = useNavigate();

  const restaurantList=()=>{
    axios.get`https://us-central1-missao-newton.cloudfunctions.net/fourFoodA/restaurants
    `
  }

  return (
    <div>
      <h1>LISTA DE RESTAURANTES</h1>
      <button onClick={() => goToLastPage(navigate)}>Voltar</button>
    </div>
  );
}

export default RestaurantListPage;