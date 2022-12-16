import { HistoryArea } from "./styles";
import { backgroundColor } from "../../constants/colors";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { Context } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default () => {
    let { auth } = useContext(Context);
    let navigate = useNavigate();
    

    // Redireciona para home se o usuário não estiver autenticado
    useEffect(() => {
        if(!auth){
            console.log("ok");
            navigate("/");
        }
    }, []);

    return(
        <HistoryArea color={ backgroundColor }>

        </HistoryArea>
    );
}