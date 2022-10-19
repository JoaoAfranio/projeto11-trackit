import Main from "../../components/Main"
import styled from "styled-components"
import COLORS from "../../constants/colors";


export default function History() {
    return(
        <Main>
            <Container>
                <Title>Histórico</Title>
                <SubTitle>Em breve você poderá ver o histórico dos seus hábitos aqui!</SubTitle>
            </Container>
        </Main>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;

    padding: 0px 17px;
`

const Title = styled.h1`
    font-size: 23px;
    color: ${COLORS.darkBlue};
    font-weight: 500;

    margin-bottom: 20px;
`

const SubTitle = styled.h1`
    font-size: 18px;
    color: ${COLORS.darkGrey};
`