import { HistoryArea, Title, Desc } from "./styles";
import { backgroundColor } from "../../constants/colors";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { secondaryColor, textColor } from "../../constants/colors";

import { Context } from "../../context/AuthContext";

export default () => {
    let { userData } = useContext(Context)
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
            <Title color={secondaryColor}>Histórico</Title>
            <Desc color={textColor}>Em breve você poderá ver o histórico dos seus hábitos aqui!</Desc>
        </HistoryArea>
    );
}