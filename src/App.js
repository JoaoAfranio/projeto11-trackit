import GlobalStyle from "./assets/css/GlobalStyle";
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register"
import { BrowserRouter, Routes, Route} from "react-router-dom";

export default function App() {
    return (
        <>
            <GlobalStyle />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/cadastro" element={<Register />} />
                </Routes>
            </BrowserRouter>

        </>
    )
}