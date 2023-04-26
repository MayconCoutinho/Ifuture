export const goToLoginPage = (navigate) => {
    navigate("/");
  };

  export const goToSignUpPage = (navigate) => {
    navigate("/SignUp");
  };
  
  export const goToSignAddress = (navigate) => {
    navigate("/cadastrarendereco")
}

  export const goToCartPage = (navigate) => {
    navigate("/carrinho");
  };
  export const goToProfilePage = (navigate) => {
    navigate("/profile");
  };
  
  export const goToLastPage = (navigate) => {
    navigate(-1);
  };

  export const goToEditPage = (navigate) =>{
    navigate("/profile/editPage")
  }

  export const goToFeedPage = (navigate) => {
    navigate("/feed");
  };
  
  export const goToSearch = (navigate) => {
    navigate("/busca");
  };
  




  // rota para pagina de detalhes do restaurante com os produtos 
  export const irParaDetalhesRestaurante = (navigate, id) => {
    navigate(`/restaurante/${id}`);
    window.localStorage.setItem("IdCardDetail", id)
  };
  