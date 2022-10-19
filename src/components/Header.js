import { useContext } from "react";
import styled from "styled-components"
import COLORS from "../constants/colors"
import AuthContext from "../contexts/auth";

export default function Header() {
    const {user} = useContext(AuthContext);

    return (
        <Container>
            <Title>TrackIt</Title>
            <img src={user.image} alt="user"/>
        </Container>

    )
    
}

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;

    height: 70px;
    width: 100%;
    background-color: ${COLORS.darkBlue};

    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

    img {
        width: 50px;
        height: 50px;
        border-radius: 50px;
        margin-right: 18px;
    }
    
`

const Title = styled.h1`
    font-family: "Playball";
    font-size: 38px;
    color: #FFFFFF;

    margin-left: 18px;
`