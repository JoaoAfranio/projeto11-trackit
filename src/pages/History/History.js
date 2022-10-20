import Main from "../../components/Main";
import styled from "styled-components";
import COLORS from "../../constants/colors";
import { Calendar } from "react-calendar";
import { useContext, useState } from "react";

import "react-calendar/dist/Calendar.css";
import dayjs from "dayjs";
import axios from "axios";
import AuthContext from "../../contexts/auth";

export default function History() {
  const [dates, setDates] = useState([]);

  const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/history/daily";
  const { user } = useContext(AuthContext);
  const config = {
    headers: { Authorization: `Bearer ${user.token}` },
  };

  useState(() => {
    axios
      .get(URL, config)
      .then((res) => {
        setDates(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function verifyDate(date) {
    const calendarDate = dayjs(date).format("DD/MM/YYYY");
    const findDate = dates.find((d) => d.day === calendarDate);

    if (findDate) {
      const completedAll = findDate.habits.find((h) => h.done === false);
      const classTile = completedAll !== undefined ? "notCompleted" : "completed";
      return classTile;
    } else {
      return null;
    }
  }

  return (
    <Main>
      <Container>
        <Title>Histórico</Title>
        {/* <SubTitle>Em breve você poderá ver o histórico dos seus hábitos aqui!</SubTitle> */}
        <Calendar
          tileClassName={({ date }) => {
            const classTile = verifyDate(date);
            return classTile;
          }}
        />
      </Container>
    </Main>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding: 0px 17px;

  .react-calendar {
    width: 500px;
    max-width: 100%;
    background: white;
    border: none;
    border-radius: 5px;
  }
  .react-calendar button {
    margin: 0;
    border: 0;
    outline: none;
    color: #000000;
  }
  .react-calendar__month-view__days__day--weekend {
    color: #d10000 !important;
  }
  .react-calendar__month-view__days__day--neighboringMonth {
    color: #757575 !important;
  }

  .react-calendar__tile {
    max-width: 100%;
    text-align: center;
    padding: 1.5em 0.5em;
    background: none;
  }

  .completed,
  .notCompleted {
    border-radius: 50px;
    color: white;
  }

  .completed {
    background-color: ${COLORS.green};
  }

  .notCompleted {
    background-color: red;
  }
`;

const Title = styled.h1`
  font-size: 23px;
  color: ${COLORS.darkBlue};
  font-weight: 500;

  margin-bottom: 20px;
`;

const SubTitle = styled.h1`
  font-size: 18px;
  color: ${COLORS.darkGrey};
`;
