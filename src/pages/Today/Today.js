import Main from "../../components/Main";
import styled from "styled-components"
import COLORS from "../../constants/colors";
import Habit from "./Habit";


export default function Today() {

    return (
        <>
            <Main>
                <Container>
                    <Box>
                        <h1>Segunda, 17/05</h1>
                        <h2>Nenhum hábito concluído ainda</h2>
                    </Box>

                    <Habit />

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

const Box = styled.div`
    display: flex;
    flex-direction: column;

    gap: 5px;

    margin-bottom: 20px;

    h1 {
        font-size: 23px;
        color: ${COLORS.darkBlue};
        font-weight: 500;
    }

    h2 {
        font-size: 18px;
        color: ${COLORS.grey};
        font-weight: 500;
    }   

    
`
