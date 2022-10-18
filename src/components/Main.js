import Footer from "./Footer";
import Header from "./Header";
import styled from "styled-components";

export default function Main({children}){
    return (
        <>
            <Header />
                <Content>
                    {children}
                </Content>     
            <Footer />
        </> 
    )
}

const Content = styled.div`
    padding-top: 100px;
    height: 500px;
    background-color: #F2F2F2;
`