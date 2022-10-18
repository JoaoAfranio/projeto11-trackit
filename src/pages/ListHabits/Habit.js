import styled from "styled-components"
import iconDelete from "../../assets/img/delete.png"
import COLORS from "../../constants/colors"
import Days from "./Days"


export default function Habit() {
    return (
        <Container>
            <h1>Ler 1 capítulo de livro</h1>
            <Days selectedDays={[1,3,5]} />
            <img src={iconDelete} alt="delete"/>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;

    background-color: #FFFFFF;

    padding: 18px;

    border-radius: 5px;

    position: relative;

    gap: 5px;

    h1 {
        font-size: 20px;
        color: ${COLORS.darkGrey}
    }


    img {
        width: 13px;
        height: 15px;

        position: absolute;
        top: 10px;
        right: 10px;
    }
`