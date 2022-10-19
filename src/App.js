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

    const [user, setUser] = useState({
        "id": 5902,
        "name": "teste",
        "image": "https://static.wikia.nocookie.net/wikiesponja/images/4/41/180px-Spongebob-squarepants.png/revision/latest?cb=20120201005813&path-prefix=pt-br",
        "email": "teste100@hotmail.com",
        "password": "123456",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NTkwMiwiaWF0IjoxNjY2MTk0MDEzfQ.ndHpRo2DvcDOJxmuL2m74hVG63ghB1CfLOdafK9L9eM"
      });

    const [progress, setProgress] = useState(0)


    return (
        <AuthContext.Provider value={{user, setUser, progress, setProgress}}>
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