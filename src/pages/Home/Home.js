import logo from "../../assets/img/logo.png";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import COLORS from "../../constants/colors";
import { useContext, useState } from "react";
import axios from "axios";
import AuthContext from "../../contexts/auth";
import { ThreeDots } from "react-loader-spinner";

export default function Home() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [disabledForm, setDisabledForm] = useState(false);
  const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login";

  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  function handleInput(e) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

  function handleForm(e) {
    e.preventDefault();
    setDisabledForm(true);

    axios
      .post(URL, {
        email: form.email,
        password: form.password,
      })
      .then((res) => {
        setUser(res.data);
        navigate("/hoje");
      })
      .catch((err) => {
        alert(err.response.data.message);
        setDisabledForm(false);
      });
  }

  return (
    <Container>
      <img src={logo} alt="logo" />
      <Form onSubmit={handleForm}>
        <Input disabled={disabledForm} onChange={handleInput} name="email" value={form.email} placeholder="email" />
        <Input disabled={disabledForm} onChange={handleInput} name="password" placeholder="senha" value={form.password} />
        <Button>{disabledForm === false ? "Entrar" : <ThreeDots color="#FFFFFF" visible={true} />}</Button>
      </Form>

      <RegisterLink to="./cadastro">Não tem uma conta? Cadastre-se!</RegisterLink>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 80px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
  gap: 5px;
`;

const Input = styled.input`
  height: 45px;
  width: 100%;
  font-size: 20px;
`;

const Button = styled.button`
  height: 45px;
  width: 100%;
  font-size: 21px;
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
`;

const RegisterLink = styled(Link)`
  margin-top: 25px;
  color: ${COLORS.blue};
  font-size: 15px;
`;
