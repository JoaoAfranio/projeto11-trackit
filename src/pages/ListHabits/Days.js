import styled from "styled-components"
import COLORS from "../../constants/colors"

export default function Days({days, setDays, disabled}) {
    const daysWeek = ["D", "S", "T", "Q", "Q" , "S", "S"]

    
    function handleDay(id) {
        if (days.includes(id)){
            const newArray = days.filter(i => id !== i)
            setDays([...newArray])
        } else {
            setDays([...days, id])
        }
    }

    return (
        <BoxDays>
            {daysWeek.map((d, id) => 
                <Day disabled={disabled} key={id} onClick={() => {handleDay(id)}} className={days?.includes(id) ? "checked" : ""}>
                    {d}
                </Day>   
            )}    
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