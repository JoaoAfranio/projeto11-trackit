import styled from "styled-components"
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Link } from "react-router-dom"
import COLORS from "../constants/colors";


export default function Footer() {
    const percentage = 66

    

    return (
        <Container>
            <NavLink to="/habitos">Hábitos</NavLink>
            <BoxProgress>
            <Link to="/hoje">
                <CircularProgressbar
                    value={percentage}
                    text="Hoje"
                    background
                    backgroundPadding={6}
                    styles={buildStyles({
                        backgroundColor: COLORS.blue,
                        textColor: "#fff",
                        pathColor: "#fff",
                        trailColor: "transparent"
                    })}
                />;
            </Link>
            </BoxProgress>
            <NavLink to="/historico">Histórico</NavLink>
        </Container>
    );
}


const Container = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;

    position: fixed;
    bottom: 0;
    left: 0;

    height: 70px;
    width: 100%;
    background-color: #FFFFFF;
`

const BoxProgress = styled.div`
    width: 100px;
    height: 100px;
    margin-bottom: 50px;
`


const NavLink = styled(Link)`
    text-decoration: none;
    color: ${COLORS.blue};
    font-size: 18px;
`