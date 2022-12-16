import { TodayArea, Title, SubTitle } from "./styles";
import { backgroundColor } from "../../constants/colors";
import { secondaryColor } from "../../constants/colors";
import Task from "../../components/Task";
import { useEffect, useState } from "react";
import { useContext } from "react";
import axios from "axios";
import { BASE_URL } from "../../constants/urls";

import { Context } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

import dayjs from "dayjs";

export default () => {
    let { auth, userData } = useContext(Context);
    let navigate = useNavigate();
    let dayJS = dayjs()
    const [habitsToday, setHabitsToday] = useState([]);

    // Redireciona para home se o usuário não estiver autenticado
    useEffect(() => {
        if (!auth) {
            console.log("ok");
            navigate("/");
        } else {
            const config = {
                headers: { Authorization: `Bearer ${userData.token}` }
            }
            axios.get(BASE_URL + "/habits/today", config)
                .then((response) => {
                    setHabitsToday(response.data);
                })
                .catch((error) => {
                    alert(error.response.data.message);
                });
        }
    }, []);

    //Retorna dia da semana correspondente ao número entre 0 e 6
    const dayOfWeek = (num) => {
        switch (num) {
            case 0: return "Domingo";
            case 1: return "Segunda";
            case 2: return "Terça";
            case 3: return "Quarta";
            case 4: return "QUinta";
            case 5: return "Sexta";
            case 6: return "Sábado";
        }
    }

    //
    const percentage = (qnt, total) => {
        return (qnt / total) * 100;
    }

    return (
        <TodayArea color={backgroundColor}>
            <Title color={secondaryColor}>{dayOfWeek(dayJS.day())}, {dayJS.date()}/{dayJS.month() + 1}</Title>
            {habitsToday.length === 0 &&
                <SubTitle> Você não tem nenhum hábito cadastrado para hoje! </SubTitle>
            }
            {habitsToday.length > 0 &&
                <>
                    <SubTitle>Nenhum hábito concluído ainda</SubTitle>
                    {habitsToday.map(habit => <Task key={habit.id} name={habit.name} done={habit.done} currentSequence={habit.currentSequence} highestSequence={habit.highestSequence} />)}
                </>
            }
        </TodayArea>
    );
}