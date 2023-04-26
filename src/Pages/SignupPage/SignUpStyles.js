import styled from "styled-components";

export const Line = styled.div`
    width: 100%; 
    border: 1px solid #B8B8B8; 
    border-bottom: none;   
    border-left: none;  
    border-right: none; 
`

export const IconPosition = styled.div`
   width: 300px; 
   margin-left: -50px; 
   margin-bottom: 2px; 
`

export const SignUpStyled = styled.div`
    box-sizing: border-box;
    display: flex; 
    align-items: center;
    justify-content: center;
    flex-direction: column;
  
    

    h1 {
        font-size: 45px; 
        margin-bottom: -10px;
        align-items: center;
        color: #FF4500;
    }
   h3 {
    font-weight: lighter; 
    align-items: center;
    font-size: 22px; 
   }
   p {
        box-sizing: border-box;
        font-size: 12px;
        width: 31%; 
        color: #B8B8B8;
        margin-bottom: -19px; 
        margin-left: 15px; 
        padding-left: 10px; 
        position: relative; 
        background-color: white; 
        padding-top: 13px; 
    };

    input {
        box-sizing: border-box;
        width: 20.5rem; 
        height: 3.5rem;
        border-radius: 5px;
        border: 1px solid #B8B8B8; 
        margin-top: 10px; 
        padding-left: 10px; 
        ::placeholder {
            font-size: 13px; 
            color:#B8B8B8;
            }
            :focus { 
    outline: none !important;
    border-color: #E8222E;
    }
    }

    button {
        margin-top: 20px; 
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center; 
        cursor: pointer;
        width: 20.5rem;
        height: 2.625rem;
        border: 1px solid #E8222E; 
        border-radius: 5px; 
        background-color: #E8222E; 
        color: white; 
        font-family: 'DM Sans', sans-serif;
        font-size: 15px; 
        &:active {
            background-color: red; 
        }
      } 
`

export const SignUpContainer = styled.div`
    display: flex; 
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 4%; 

    img {
     width: 6.5rem;
    height: 3.625rem;
    object-fit: contain; 
    margin-top: 15px; 
    }

    h3 {
        font-size: 1rem; 
        padding-top: 10px; 
        font-weight:500;
    }

`