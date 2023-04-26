import styled from "styled-components";

export const SplashContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e8222e;
  width: 100vw;
  height: 100vh;
  animation: fadeIn 1s;
  animation: fadeOut 2s;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    20% {
      opacity: 1;
    }
    40% {
      opacity: 2;
    }
    60% {
      opacity: 3;
    }
    70% {
      opacity: 2;
    }
    90% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  @keyframes fadeOut {
    0% {
      opacity: 2;
    }
    100% {
      opacity: 0;
    }
  }
`;

export const Logo = styled.img`
  width: 126px;
  height: 65px;
`;
