import axios from "axios";
import { BASE_URL } from "../constants/url";
import { goToFeedPage, goToSignAddress } from "../Routes/Coordinator";

export const login = async (body) => {
  try {
    const response = await axios.post(`${BASE_URL}/login`, body);
    return response;
  } catch (error) {
    alert(error.response.data.message);
    return false;
  }
};
export const signUp = (body, clear, navigate) => {
  axios
    .post(`${BASE_URL}/signUp`, body)
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      clear();
      alert("usuário Cadastrado com sucesso!");
      goToSignAddress(navigate);
    })
    .catch((err) => alert(err.response.data.message));
};
export const signAddres = (body, clear, navigate) => {
  axios
    .put(`${BASE_URL}/address`, body, {
      headers: {
        auth: localStorage.getItem("token"),
      },
    })
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      clear();
      goToFeedPage(navigate);
    })
    .catch((err) => alert(err.response.data.message));
};
export const UpdateProfile = (body, clear) => {
  axios
    .put(`${BASE_URL}/profile`, body, {
      headers: {
        auth: localStorage.getItem("token"),
      },
    })
    .then(() => {
      alert("Alteração realizada");
      clear();
    })
    .catch((err) => alert(err.response.data.message));
};
export const confirmingPurchase = async (body, id) => {
  return axios.post(`${BASE_URL}/restaurants/${id}/order`, body, {
    headers: {
      auth: localStorage.getItem("token"),
    },
  });
};

export const orderInProgress = async () => {
  return axios.get(`${BASE_URL}/active-order`, {
    headers: {
      auth: localStorage.getItem("token"),
    },
  });
};
