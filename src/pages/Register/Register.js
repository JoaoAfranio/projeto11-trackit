import logo from "../../assets/img/logo.png"
import styled from "styled-components"
import { Link, useNavigate } from "react-router-dom"
import COLORS from "../../constants/colors"
import { useState } from "react"
import axios from "axios";
import { ThreeDots } from "react-loader-spinner"


export default function Home() {
    const [disabledForm, setDisabledForm ] = useState(false)
    const [form, setForm] = useState({email: "", name: "", image: "", password: ""})

    const navigate = useNavigate();

    const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up"

    function handleForm(e) {
        e.preventDefault();
        setDisabledForm(true)

        axios.post(URL,{
            email: form.email,
            name: form.name,
            image: form.image,
            password: form.password
        } )
            .then(() => {
                navigate("/")
            })
            .catch((err) => {
                alert(err.response.data.message)
                setDisabledForm(false)
            })
    
    }

    function handleInput(e) {
        const {name, value} = e.target
        setForm({...form, [name] : value})
    }

    return (
        <Container>
            <img src={logo} alt="logo"/>
            <Form onSubmit={handleForm}>
                <Input disabled={disabledForm} name="email" onChange={handleInput} value={form.email} placeholder="email"/>
                <Input disabled={disabledForm} name="password" onChange={handleInput} value={form.password} placeholder="senha"/>
                <Input disabled={disabledForm} name="name" onChange={handleInput} value={form.name} placeholder="nome"/>
                <Input disabled={disabledForm} name="image" onChange={handleInput} value={form.image} placeholder="foto"/>
                <Button disabled={disabledForm} >
                    {disabledForm === false ? "Cadastrar" : <ThreeDots color="#FFFFFF" visible={true}/>}
                </Button>

            </Form>

            <RegisterLink to="/">Já tem uma conta? Faça login!</RegisterLink>
        </Container>
        
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin-top: 80px;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 80%;
    gap: 5px;
`

const Input = styled.input`
    height: 45px;
    width: 100%;
    font-size: 20px;
`

const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;

    height: 45px;
    width: 100%;
    font-size: 21px;

    cursor: pointer;

`

const RegisterLink = styled(Link)`
    margin-top: 25px;
    color: ${COLORS.blue};
    font-size: 15px;
`