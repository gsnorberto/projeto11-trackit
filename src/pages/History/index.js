import { HistoryArea } from "./styles";
import { backgroundColor } from "../../constants/colors";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { Context } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default () => {
    let { userData } = useContext(Context);
    let navigate = useNavigate();
    
    // Redireciona para home se o usuário não estiver autenticado
    useEffect(() => {
        if(!userData){
            navigate("/");
        } else {
            
        }
    }, []);

    return(
        <HistoryArea color={ backgroundColor }>

        </HistoryArea>
    );
}