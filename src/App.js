import GlobalStyle from "./assets/css/GlobalStyle";

import { BrowserRouter, Routes, Route} from "react-router-dom";

import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register"
import ListHabits from "./pages/ListHabits/ListHabits";
import Today from "./pages/Today/Today";
import History from "./pages/History/History";
import AuthContext from "./contexts/auth";

import { useState } from "react";

export default function App() {

    const [user, setUser] = useState("batata");


    return (
        <AuthContext.Provider value={{user, setUser}}>
            <GlobalStyle />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/cadastro" element={<Register />} />
                    <Route path="/habitos" element={<ListHabits />} />
                    <Route path="/hoje" element={<Today />} />
                    <Route path="/historico" element={<History />} />
                </Routes>
            </BrowserRouter>

        </AuthContext.Provider>
    )
}