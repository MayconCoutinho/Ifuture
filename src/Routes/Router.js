import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import LoginPage from '../Pages/Loginpage/LoginPage'
import SignUpPage from "../Pages/SignupPage/SignUpPage";
import CartPage from "../Pages/CartPage/CartPage"
import MyProfilePage from "../Pages/MyProfilePage/MyProfilePage";
import ProfileEditPage  from "../Pages/ProfileEditPage/ProfileEditPage";
import SignAddressPage  from "../Pages/SignAddressPage/SignAddresPage";
import RestaurantSearchPage from "../Pages/RestaurantSearchPage/RestaurantSearchPage";
import PageHome from "../Pages/PageHome/PageHome";
import PaginaDetalhesRestaurante from "../Pages/PaginaDetalhesRestaurante/PaginaDetalhesRestaurante";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<LoginPage />} />
        <Route path="/feed" element={<PageHome />} />
        <Route path="/signUp" element={<SignUpPage />} />
        <Route path="/carrinho" element={<CartPage />} />
        <Route path="/cadastrarendereco" element={<SignAddressPage />} />
        <Route path="/profile" element={<MyProfilePage/>}/>
        <Route path="/profile/editPage" element={<ProfileEditPage/>}/>
        <Route path="/busca" element={<RestaurantSearchPage />} />
        <Route path="/restaurante/:id" element={<PaginaDetalhesRestaurante /> }/>
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
