import logo from "../../assets/img/logo.png"
import styled from "styled-components"
import { Link } from "react-router-dom"
import COLORS from "../../constants/colors"


export default function Home() {
    return (
        <Container>
            <img src={logo} alt="logo"/>
            <Form>
                <Input placeholder="email"/>
                <Input placeholder="senha"/>
                <Button>Entrar</Button>
            </Form>

            <RegisterLink to="./cadastro">Não tem uma conta? Cadastre-se!</RegisterLink>
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
    height: 45px;
    width: 100%;
    font-size: 21px;
`

const RegisterLink = styled(Link)`
    margin-top: 25px;
    color: ${COLORS.blue};
    font-size: 15px;
`