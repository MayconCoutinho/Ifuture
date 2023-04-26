import React from "react";
import { goToLastPage } from "../../Routes/Coordinator";
import { useNavigate } from "react-router-dom";
import { Stack } from '@chakra-ui/react'
import SignUpForm from "./SignUpForm";
import RedLogo from "../../assets/RedLogo.png"
import { SignUpContainer, Line, IconPosition } from "./SignUpStyles"
import { ChevronLeftIcon } from '@chakra-ui/icons'


function SignUpPage() {
  const navigate = useNavigate();


  return (
    <SignUpContainer>
      <Stack direction='column' spacing={-4} align='center'></Stack>
      <IconPosition>
      <ChevronLeftIcon w={8} h={8} onClick={() => goToLastPage (navigate)}  />
      </IconPosition>
      <Line></Line>
      <img src={RedLogo} alt='logomarca - ifuture vermelha'/>
      <h3>Cadastrar</h3>
      <SignUpForm />
    </SignUpContainer>
  );
}

export default SignUpPage;