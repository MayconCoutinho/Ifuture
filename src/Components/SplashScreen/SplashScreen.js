import React, { useEffect } from "react";
import { SplashContainer, Logo } from "./SplashStyled";
import logoWhite from "../../assets/logoWhite.png";

function SplashScreen(props) {
  useEffect(() => {
    setTimeout(() => {
      props.setLoading(false);
    }, 1500);
  }, []);

  return (
    <SplashContainer>
      <Logo src={logoWhite} />
    </SplashContainer>
  );
}

export default SplashScreen;
