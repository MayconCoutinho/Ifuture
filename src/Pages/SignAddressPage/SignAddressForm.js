import React from "react";
import { SignUpStyled } from "../SignupPage/SignUpStyles"
import useForm from "../../hooks/useForm"
import { signAddres } from "../../services/users"
import { useNavigate } from "react-router-dom";
import { Button } from '@chakra-ui/react'


const SignUpForm = () => {
    const navigate = useNavigate()
    const [form, onChange, clear] = useForm({ street:"", number:"", neighbourhood:"", city:"", state:"", complement:""})

    const onSubmitForm = (event) => {
        event.preventDefault()
        signAddres(form, clear, navigate)
    }

    return (
        <SignUpStyled>
            <form onSubmit={onSubmitForm}>
                <p>Logradouro*</p>
                <input
                    placeholder={"Rua/Av"}
                    type={"text"}
                    name={"street"}
                    value={form.street}
                    onChange={onChange}
                    autoFocus
                    required
                />
                <p>Número*</p>
                <input
                    placeholder={"Número"}
                    type={"number"}
                    name={"number"}
                    value={form.number}
                    onChange={onChange}
                    required
                />
                <p>Complemento</p>
                <input
                    placeholder={"Apto. /Bloco"}
                    type={"text"}
                    name={"complement"}
                    value={form.complement}
                    onChange={onChange}
                />
                <p>Bairro*</p>
                <input
                    placeholder={"Bairro"}
                    type={"text"}
                    name={"neighbourhood"}
                    value={form.neighbourhood}
                    onChange={onChange}
                    required
                />
                <p>Cidade*</p>
                <input
                    placeholder={"Cidade"}
                    type={"text"}
                    name={"city"}
                    value={form.city}
                    onChange={onChange}
                    required
                />
                <p>Estado*</p>
                <input
                    placeholder={"Estado"}
                    type={"text"}
                    name={"state"}
                    value={form.state}
                    onChange={onChange}
                    required
                />
                <Button colorScheme='red' type="submit" variant='solid'>Salvar</Button>
            </form>
        </SignUpStyled>

    )
};

export default SignUpForm; 