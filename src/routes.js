import { BrowserRouter, Routes, Route } from "react-router-dom";
import Habits from "./pages/Habits";
import Today from "./pages/Today";
import History from "./pages/History";
import Login from './pages/Login';
import Register from './pages/Register';
import NotFound from './pages/NotFound';



export default () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/cadastro" element={<Register />} />
                <Route path="/habitos" element={<Habits />} />
                <Route path="/hoje" element={<Today />} />
                <Route path="/historico" element={<History />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}