import { useContext, useState } from "react"
import { ThreeDots } from "react-loader-spinner"
import styled from "styled-components"
import COLORS from "../../constants/colors"
import Days from "./Days"
import axios from "axios"
import AuthContext from "../../contexts/auth"

export default function RegisterHabit({setOpenRegister, addHabit}) {
    const [name, setName] = useState("")
    const [days, setDays] = useState([])

    const { user } = useContext(AuthContext)

    const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits"
    const config = {
        headers: {Authorization : `Bearer ${user.token}`}
    }

    const [disabled, setDisabled] = useState(false)

    function handleRegister() {
        const bodyParams = {
            name: name,
            days: days
        }

        setDisabled(!disabled)
        axios.post(URL, bodyParams, config)
        .then((res) => {
            console.log(res)
            setName("")
            setDays([])
            addHabit(res.data)
            setOpenRegister(false)
        }).catch((err) => {
            alert(err.response.data.details)
            setDisabled(false)
        })

    }


    return (
        <Container disabled={disabled}>
            <input disabled={disabled} name="name" value={name} onChange={(e) => {setName(e.target.value)}} placeholder="nome do hábito" />
            <Days disabled={disabled} setDays={setDays} days={days}/>
            <BoxButtons>
                <button disabled={disabled} onClick={() => {setOpenRegister(false)}} className="cancel">Cancelar</button>
                <button disabled={disabled} onClick={handleRegister}>Salvar</button>
            </BoxButtons>

            {disabled && (
                <BoxLoading>
                    <ThreeDots className="loading" color={COLORS.darkBlue} visible={true}/>
                </BoxLoading>
            )}
        </Container>
    )
}


const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
    position: relative;

    background-color: #FFFFFF;

    padding: 18px;

    border-radius: 5px;

    opacity: ${props => props.disabled ? "50%" : ""};

    input {
        height: 45px;
        font-size: 20px;
        outline: none;
        color: ${COLORS.darkGrey}
    }
`

const BoxLoading = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
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