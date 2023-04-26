import React from "react";
import { useNavigate } from "react-router-dom";
import { Button} from "@chakra-ui/react";
import { UpdateProfile } from "../../services/users";
import useForm from "../../hooks/useForm";
import { SignUpStyled } from "../SignupPage/SignUpStyles"
import {IMaskInput} from  "react-imask"

function EditForm() {
  const navigate = useNavigate();

  const [form, onChange, clear] = useForm({ name: "", email: "", cpf: "" });

  const onSubmitForm = (event) => {
    event.preventDefault();
    UpdateProfile(form, clear, navigate);
  };

  return (
    <SignUpStyled >
      <form onSubmit={onSubmitForm}>
      <p>E-mail*</p>
        <input
          placeholder="seuemail@email.com"
          type={"email"}
          name={"email"}
          value={form.email}
          onChange={onChange}
          required
        />
        <p>Nome*</p>
        <input
          placeholder="Nome"
          type={"text"}
          name={"name"}
          value={form.name}
          onChange={onChange}
          required
        />
        <p>CPF*</p>
        <IMaskInput
          placeholder={"000.000.000-00"}
          type={"name"}
          name={"cpf"}
          value={form.cpf}
          onChange={onChange}
          mask="000.000.000-00"
          required
        />
        <Button colorScheme="red" type="submit" variant="solid">
         Alterar
        </Button>
      </form>
    </SignUpStyled >
  );
}

export default EditForm;
