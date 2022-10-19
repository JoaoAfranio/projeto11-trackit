import axios from "axios"
import { useContext } from "react"
import styled from "styled-components"
import COLORS from "../../constants/colors"
import AuthContext from "../../contexts/auth"
import Days from "./Days"


export default function Habit({info, removeHabit}) {

    const { user } = useContext(AuthContext)
    
    const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${info.id}`
    const config = {
        headers: {Authorization : `Bearer ${user.token}`}
    }

    function deleteHabit() {
        axios.delete(URL, config)
            .then((res) => {
                removeHabit(info.id)
                console.log(res)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <Container>
            <h1>{info?.name}</h1>
            <Days disabled={true} days={info?.days} />
            <ion-icon onClick={deleteHabit} name="trash-outline"></ion-icon>
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


    ion-icon {
        font-size: 17px;

        position: absolute;
        top: 10px;
        right: 10px;
        
        cursor: pointer;
    }
`