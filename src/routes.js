import { BrowserRouter, Routes, Route } from "react-router-dom";
import Habits from "./pages/Habits";
import Today from "./pages/Today";
import History from "./pages/History";
import Login from './pages/Login';
import Register from './pages/Register';
import NotFound from './pages/NotFound';

import Header from "./components/Header";
import Footer from "./components/Footer";

import { useContext } from "react";
import { Context } from "./context/AuthContext";


export default () => {
    let { userData } = useContext(Context);

    return (
        <BrowserRouter>
            {userData && <Header />}
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/cadastro" element={<Register />} />
                <Route path="/habitos" element={<Habits />} />
                <Route path="/hoje" element={<Today />} />
                <Route path="/historico" element={<History />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            {userData && <Footer />}
        </BrowserRouter>
    );
}