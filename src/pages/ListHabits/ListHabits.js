import Main from "../../components/Main";
import styled from "styled-components"
import COLORS from "../../constants/colors";
import RegisterHabit from "./RegisterHabit"

import { useState } from "react";
import Habit from "./Habit";

export default function ListHabits() {

    const [openRegister, setOpenRegister] = useState(false);

    return (
        <>
            <Main>
                <Container>
                    <BoxMenu>
                        <h1>Meus hábitos</h1>
                        <Button onClick={() => {setOpenRegister(!openRegister)}}>+</Button>
                    </BoxMenu>
                    
                    {openRegister && (<RegisterHabit setOpenRegister={setOpenRegister}/>)}
                    
                    <Habit />

                    <Info>
                        Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
                    </Info>
                </Container>
            </Main>
        </>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;

    padding: 0px 17px;
`

const BoxMenu = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 20px;

    h1 {
        font-size: 23px;
        color: ${COLORS.darkBlue};
        font-weight: 500;
    }

    
`

const Button = styled.button`
    padding: 2px 10px;
    font-size: 24px;
    cursor: pointer;
`

const Info = styled.p`
    color: ${COLORS.darkGrey};
    line-height: 23px;
`