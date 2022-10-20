import Main from "../../components/Main";
import styled from "styled-components";
import COLORS from "../../constants/colors";
import Habit from "./Habit";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../../contexts/auth";

import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import Loading from "../../components/Loading";

export default function Today() {
  const [listHabits, setListHabits] = useState([]);
  const [updateList, setUpdateList] = useState([]);

  const { user, setProgress } = useContext(AuthContext);
  const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today";
  const config = {
    headers: { Authorization: `Bearer ${user.token}` },
  };

  const today = dayjs().locale("pt-br").format("dddd, DD/MM");

  useEffect(() => {
    axios
      .get(URL, config)
      .then((res) => {
        setListHabits(res.data);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [updateList]);

  const concludedHabits = listHabits.filter((h) => h.done === true).length;
  const percetageConcluded = Math.floor((concludedHabits * 100) / listHabits.length);
  setProgress(percetageConcluded);

  return (
    <>
      <Main>
        <Container>
          <Box>
            <h1>{today}</h1>
            {concludedHabits > 0 ? <h2 className="concluded">{percetageConcluded}% dos hábitos concluídos</h2> : <h2>Nenhum hábito concluído ainda</h2>}
          </Box>

          {listHabits.length === 0 && <Loading />}
          {listHabits.map((h) => (
            <Habit setUpdateList={setUpdateList} key={h.id} info={h} />
          ))}
        </Container>
      </Main>
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding: 0px 17px;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;

  gap: 5px;

  margin-bottom: 20px;

  h1 {
    font-size: 23px;
    color: ${COLORS.darkBlue};
    font-weight: 500;
    text-transform: capitalize;
  }

  h2 {
    font-size: 18px;
    color: ${COLORS.grey};
    font-weight: 500;

    &.concluded {
      color: ${COLORS.green};
    }
  }
`;
