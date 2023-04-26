import styled from "styled-components";

export const LoginStyled = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1 {
    font-size: 45px;
    margin-bottom: -10px;
    align-items: center;
    color: #ff4500;
  }

  h3 {
    font-weight: lighter;
    align-items: center;
    font-size: 22px;
  }

  p {
    box-sizing: border-box;
    font-size: 11px;
    width: 22%;
    color: #b8b8b8;
    margin-bottom: -49px;
    margin-left: 15px;
    padding-left: 0px;
    position: relative;
    background-color: white;
    padding-top: 13px;
  }

  input {
    box-sizing: border-box;
    width: 20.5rem;
    height: 3.5rem;
    border-radius: 5px;
    border: 1px solid #b8b8b8;
    margin-top: 40px;
    padding-left: 10px;
    ::placeholder {
      font-size: 13px;
      color: #b8b8b8;
    }
    :focus {
      outline: none !important;
      border-color: #e8222e;
      select:has(option[value=""]) {
        color: white;
      }
    }
  }

  button {
    margin-top: 40px;
    margin-bottom: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    width: 20.5rem;
    height: 2.625rem;
    border: 1px solid #e8222e;
    border-radius: 5px;
    background-color: #e8222e;
    color: white;
    font-size: 15px;
    &:active {
      background-color: red;
    }
  }
`;

export const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;

  img {
    width: 6.5rem;
    height: 3.625rem;
    object-fit: contain;
    margin-bottom: 15%;
  }

  h3 {
    font-size: 1rem;
    padding-top: 20px;
    padding-bottom: 10px;
    font-weight: 500;
  }
`;
export const ShowPassword = styled.div`
  position: relative;
  svg {
    position: absolute;
    right: 0;
    margin-right: 4%;
    top: 60%;
    color: grey;
  }
`;
