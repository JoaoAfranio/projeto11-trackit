import GlobalStyle from "./assets/css/GlobalStyle";
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register"
import Habits from "./pages/Habits/Habits";
import { BrowserRouter, Routes, Route} from "react-router-dom";

export default function App() {
    return (
        <>
            <GlobalStyle />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/cadastro" element={<Register />} />
                    <Route path="/habitos" element={<Habits />} />
                </Routes>
            </BrowserRouter>

        </>
    )
}