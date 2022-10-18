import styled from "styled-components"
import COLORS from "../../constants/colors"

export default function RegisterHabit() {
    const days = ["D", "S", "T", "Q", "Q" , "S", "S"]

    return (
        <Container>
            <input placeholder="nome do hábito" />
            <BoxDays>
                {days.map((d) => <Day>{d}</Day>)}    
            </BoxDays>
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

const BoxDays = styled.div`
    display: flex;
    gap: 3px;
    margin-top: 5px;
`

const Day = styled.button`
    width: 30px;
    height: 30px;
    background-color: transparent;
    border: 1px solid ${COLORS.grey};
    color: ${COLORS.grey};
    font-size: 20px;

    cursor: pointer;

    &.checked {
        color: #FFFFFF;
        background-color: ${COLORS.grey};
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