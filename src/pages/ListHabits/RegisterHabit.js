import styled from "styled-components"
import COLORS from "../../constants/colors"
import Days from "./Days"

export default function RegisterHabit() {

    return (
        <Container>
            <input placeholder="nome do hábito" />
            <Days selectedDays={[]}/>
            <BoxButtons>
                <button className="cancel">Cancelar</button>
                <button>Salvar</button>
            </BoxButtons>
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

    input {
        height: 45px;
        font-size: 20px;
        outline: none;
        color: ${COLORS.darkGrey}
    }
`


const BoxButtons = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 15px;

    margin-top: 30px;

    button {
        height: 40px;
        width: 80px;

        cursor: pointer;

        font-size: 18px;

        &.cancel {
            background-color: transparent;
            color: ${COLORS.blue};
        }
    }
`