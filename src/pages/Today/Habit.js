import styled from "styled-components"
import COLORS from "../../constants/colors";

export default function Habit() {
    return (
        <Container>
            <Box>
                <h1>Ler 1 capítulo de livro</h1>
                <h2>Sequência atual: 3 dias</h2>
                <h2>Seu recorde: 5 dias</h2>
            </Box>
            <ion-icon className="icon" name="checkbox"></ion-icon>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    position: relative;

    background-color: #FFFFFF;

    margin-bottom: 30px;
    padding: 18px 5px 18px 18px;
    gap: 5px;

    border-radius: 5px;


    ion-icon {
        color: ${COLORS.grey};
        font-size: 70px;
    }
`

const Box = styled.div`
    display: flex;
    flex-direction: column;


    h1 {
        font-size: 20px;
        color: ${COLORS.darkGrey};
        
        margin-bottom: 10px;
    }

    h2 {
        font-size: 13px;
        color: ${COLORS.darkGrey};
    }
`