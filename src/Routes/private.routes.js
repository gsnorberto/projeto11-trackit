import { BrowserRouter, Routes, Route } from "react-router-dom";
import Habits from "../pages/Habits";
import Today from "../pages/Today";
import History from "../pages/History";
import Header from "../components/Header";
import Footer from "../components/Footer";



export default function PrivateRoutes() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/habitos" element={<Habits/>} />
                <Route path="/hoje" element={<Today/>} />
                <Route path="/historico" element={<History/>} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}