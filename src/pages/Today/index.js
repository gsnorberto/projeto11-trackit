import { TodayArea, Title, SubTitle } from "./styles";
import { backgroundColor } from "../../constants/colors";
import { secondaryColor } from "../../constants/colors";
import Task from "../../components/Task";
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
        <TodayArea color={backgroundColor}>
            <Title color={secondaryColor}>Segunda, 17/05</Title>
            <SubTitle>Nenhum hábito cadastrado</SubTitle>
            <Task />
            <Task />
            <Task />
        </TodayArea>
    );
}