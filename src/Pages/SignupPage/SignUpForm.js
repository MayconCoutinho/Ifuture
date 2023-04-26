import React, { useState } from "react";
import { SignUpStyled } from "./SignUpStyles"
import useForm from "../../hooks/useForm"
import { signUp } from "../../services/users"
import { useNavigate } from "react-router-dom";
import { Button } from '@chakra-ui/react'
import { IMaskInput } from "react-imask";
import { FiEye } from "react-icons/fi";


import {  ShowPassword } from "../Loginpage/LoginStyles"

const SignUpForm = () => {

    const [form, onChange, clear] = useForm({ name: "", email: "", cpf: "", password: "", password2:"" })
    const navigate = useNavigate()
    const [shown, setShown] = useState(false);

    const onSubmitForm = (event) => {
        event.preventDefault()
        if(form.password === form.password2){
            signUp(form, clear, navigate)
        } else {
            alert("As senhas informadas não são iguais")
        }
    }

    return (
        <SignUpStyled>
            <form onSubmit={onSubmitForm}>
                <p>Name*</p>
                <input
                    placeholder={"Nome e Sobrenome"}
                    type={"name"}
                    name={"name"}
                    value={form.name}
                    onChange={onChange}
                    autoFocus
                    required
                />
                <p>Email*</p>
                <input
                    placeholder={"email@email.com"}
                    type={"email"}
                    name={"email"}
                    value={form.email}
                    onChange={onChange}
                    required
                />
                <p>CPF*</p>
                <IMaskInput
                    placeholder={"000.000.000-00"}
                    type={"text"}
                    name={"cpf"}
                    value={form.cpf}
                    onChange={onChange}
                    mask="000.000.000-00"
                    required
                />
                <ShowPassword>
                <p>Senha*</p>
                <input
                    placeholder={"Mínimo 6 caracters"}
                    type={shown ? "text" : "password"}
                    name={"password"}
                    value={form.password}
                    onChange={onChange}
                    minLength={6}
                    required
                />
                 <FiEye onClick={() => setShown(!shown)} />
                 </ShowPassword>
                 <ShowPassword>
                <p>Confirmar*</p>
                <input
                    placeholder={"Confirme a senha anterior"}
                    type={shown ? "text" : "password"}
                    name={"password2"}
                    value={form.password2}
                    onChange={onChange}
                    minLength={6}
                    required
                />
                <FiEye onClick={() => setShown(!shown)} />
                </ShowPassword>
                <Button colorScheme='red' type="submit" variant='solid'>Cadastrar</Button>
            </form>
        </SignUpStyled>
    )
};

export default SignUpForm; 






