import Main from "../../components/Main";
import styled from "styled-components"
import COLORS from "../../constants/colors";
import RegisterHabit from "./RegisterHabit"
import axios from "axios"

import { useContext, useEffect, useState } from "react";
import Habit from "./Habit";
import AuthContext from "../../contexts/auth";

export default function ListHabits() {
    const [openRegister, setOpenRegister] = useState(false);
    const [listHabit, setListHabit] = useState([])
    const { user } = useContext(AuthContext)
    
    const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits"
    const config = {
        headers: {Authorization : `Bearer ${user.token}`}
    }

    useEffect(() => {
        axios.get(URL,config)
            .then((res) => {
                setListHabit(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])


    function addHabit(hab){
        setListHabit([...listHabit, hab])
    }

    function removeHabit(id){
        const newList = listHabit.filter(h => h.id !== id)
        setListHabit([...newList])
    }

    return (
        <>
            <Main>
                <Container>
                    <BoxMenu>
                        <h1>Meus hábitos</h1>
                        <Button onClick={() => {setOpenRegister(!openRegister)}}>+</Button>
                    </BoxMenu>
                    
                    {openRegister && (<RegisterHabit addHabit={addHabit} setOpenRegister={setOpenRegister}/>)}

                    {listHabit.map(h => <Habit removeHabit={removeHabit} key={h.id} info={h}/>)}
                    
                    {listHabit.length === 0 && (
                        <Info>
                            Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
                        </Info>
                    )}


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