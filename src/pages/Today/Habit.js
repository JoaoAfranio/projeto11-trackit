import axios from "axios";
import { useContext } from "react";
import styled from "styled-components";
import COLORS from "../../constants/colors";
import AuthContext from "../../contexts/auth";

export default function Habit({ info, setUpdateList }) {
  const { id, name, currentSequence, highestSequence, done } = info;

  const sequence = currentSequence === highestSequence;

  const { user } = useContext(AuthContext);

  const URLcheck = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`;
  const URLuncheck = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`;
  const config = {
    headers: { Authorization: `Bearer ${user.token}` },
  };

  function checkHabit() {
    let url = done ? URLuncheck : URLcheck;

    axios
      .post(url, {}, config)
      .then(() => {
        setUpdateList([]);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <Container>
      <Box>
        <h1>{name}</h1>
        <h2>
          Sequência atual: <TextDone done={done}>{currentSequence} dias</TextDone>
        </h2>
        <h2>
          Seu recorde: <TextSequence sequence={sequence}>{highestSequence} dias</TextSequence>
        </h2>
      </Box>
      <ion-icon class={done ? "checked" : "unchecked"} onClick={checkHabit} done={done} name="checkbox"></ion-icon>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;

  background-color: #ffffff;

  margin-bottom: 30px;
  padding: 18px 5px 18px 18px;
  gap: 5px;

  border-radius: 5px;

  ion-icon {
    font-size: 70px;
    visibility: visible;
    cursor: pointer;

    &.checked {
      color: ${COLORS.green};
    }

    &.unchecked {
      color: ${COLORS.grey};
    }
  }
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 20px;
    color: ${COLORS.darkGrey};

    margin-bottom: 10px;
  }

  h2 {
    font-size: 13px;
    color: ${COLORS.darkGrey};
  }
`;

const TextSequence = styled.span`
  color: ${(props) => (props.sequence === true ? COLORS.green : "")};
`;

const TextDone = styled.span`
  color: ${(props) => (props.done === true ? COLORS.green : "")};
`;
