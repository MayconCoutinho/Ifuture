import React from "react";
import Router from "./Routes/Router";
import { ChakraProvider } from "@chakra-ui/react";
import GlobalState from "./Global/GlobalState";
// import styled from "styled-components";

// const ScreenPhone3 = styled.div`
//   background-color: #bbbbbb;
//   display: flex;
//   align-items: center;
//   flex-direction: column;
//   padding: 90px;
//   @media (max-width: 900px) {
//     background-color: none;
//     display: flex;
//     align-items: auto;
//     flex-direction: auto;
//     padding: 0;
//   }
// `;

// const ScreenPhone2 = styled.div`
//   display: flex;
//   border: 5px solid red;
//   border-radius: 37px;
//   justify-content: center;
//   align-items: center;
//   flex-direction: column;
//   width: 393px;
//   height: 696px;
//   box-shadow: 10px 10px 10px black;
//   @media (max-width: 900px) {
//     border: none;
//     border-radius: none;
//     justify-content: none;
//     align-items: none;
//     flex-direction: none;
//     width: auto;
//     height: auto;
//     box-shadow: none;
//   }
// `;
// const Noctc = styled.div`
//   position: fixed;
//   border: 8px solid black;
//   width: 150px;
//   background-color: black;
//   border-bottom-right-radius: 45px;
//   border-bottom-left-radius: 45px;

//   @media (max-width: 900px) {
//     display: none;
//   }
// `;
// const ScreenPhone = styled.div`
  
//   display: flex;
//   border: 8px solid black;
//   border-radius: 35px;
//   align-items: center;
//   flex-direction: column;
//   min-height: 74vh;
//   width: 390px;
//   height: 693px;
//   overflow-y: scroll;
//   ;  background-color: white;

//   ::-webkit-scrollbar {
//     display: none;
//   }


//   @media (max-width: 900px) {
    
//   border:none;
//   border-radius: none;
//   align-items: none;
//   flex-direction: column;
//   min-height: auto;
//   width: auto;
//   height: auto;
//   overflow-y: none;
  
//   background-color:none;
//   }
// `;

function App() {
  return (
    <ChakraProvider>
      {/* <ScreenPhone3>
        <ScreenPhone2>
          <ScreenPhone>
            <Noctc /> */}
            <GlobalState>
              <Router></Router>
            </GlobalState>
          {/* </ScreenPhone>
        </ScreenPhone2>
      </ScreenPhone3> */}
    </ChakraProvider>
  );
}
export default App;
