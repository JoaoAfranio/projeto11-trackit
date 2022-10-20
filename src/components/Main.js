import Footer from "./Footer";
import Header from "./Header";
import styled from "styled-components";
// import { useContext, useEffect } from "react";
// import AuthContext from "../contexts/auth";
// import { useNavigate } from "react-router-dom";

export default function Main({ children }) {
  // const { user } = useContext(AuthContext)
  // const navigate =  useNavigate()

  // useEffect(() => {
  //     if(user === undefined) navigate("/")
  // }, [])

  return (
    <>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </>
  );
}

const Content = styled.div`
  padding-top: 100px;
  min-height: 100vh;
  background-color: #f2f2f2;
  margin-bottom: 70px;
`;
