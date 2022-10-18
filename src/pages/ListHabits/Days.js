import styled from "styled-components"
import COLORS from "../../constants/colors"

export default function Days({selectedDays}) {
    const days = ["D", "S", "T", "Q", "Q" , "S", "S"]

    return (
        <BoxDays>
            {days.map((d, id) => <Day key="id" className={selectedDays.includes(id) ? "checked" : ""}>{d}</Day>)}    
        </BoxDays>
    )
}


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