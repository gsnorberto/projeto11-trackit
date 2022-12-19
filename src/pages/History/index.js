import { HistoryArea, Title, Modal, Task, TitleT, Status, Button, Header, DateC } from "./styles";
import { backgroundColor, secondaryColor } from "../../constants/colors";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import { useState } from "react";
import { BASE_URL } from "../../constants/urls";
import dayjs from "dayjs";

import { Context } from "../../context/AuthContext";
import axios from "axios";

export default () => {
    let { userData } = useContext(Context)
    let navigate = useNavigate();
    let dayJS = dayjs()
    const [historyData, sethistoryData] = useState();
    const [calendar, setCalendar] = useState(new Date());
    const [completeTasks, setCompleteTasks] = useState([]);
    const [uncompleteTasks, setUncompleteTasks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [clickedTask, setClickedTask] = useState({});

    useEffect(() => {
        if (!userData) {
            navigate("/");
        } else {
            getDailyHabits();
        }
    }, []);

    // Obter hábitos diário do usuário
    const getDailyHabits = () => {
        const config = {
            headers: { Authorization: `Bearer ${userData.token}` }
        }

        axios.get(BASE_URL + '/habits/history/daily', config)
            .then((response) => {
                sethistoryData(response.data)
                dateTaks(response.data);
            })
            .catch(error => {
                setLoading(false);
                alert(error.response);
            })
    }

    // Verificar os dias com todos hábitos completos e incompletos
    const dateTaks = (data) => {
        for (let i = 0; i < data.length; i++) {
            let ind = data[i].habits.findIndex(habit => !habit.done)
            if (ind === -1) { // todas tarefas completas
                setCompleteTasks(completeTasks => [...completeTasks, new Date(data[i].habits[0].date).getDate()])
            } else {
                setUncompleteTasks(uncompleteTasks => [...uncompleteTasks, new Date(data[i].habits[0].date).getDate()])
            }
        }
        setLoading(false);
    }

    // destacar de vermelho ou verde os dias com todos hábitos incompletos ou completos
    const formatDate = (date, d) => {
        let convDateCalendar = new Date(date);
        let day = convDateCalendar.getDate();

        if (completeTasks.includes(day) && day !== dayJS.date()) {
            return <div className="bg-green">{formatDay(day)}</div>;
        } else if (uncompleteTasks.includes(day) && day !== dayJS.date()) {
            return <div className="bg-red">{formatDay(day)}</div>;
        } else {
            return <div>{formatDay(day)}</div>;
        }
    };

    // Inserir zero na frente dos dias de 1 a 9
    const formatDay = (day) => {
        if (day <= 9) return '0' + day;
        else return day.toString();
    }

    const viewHabits = (value, event) => {
        let convDateCalendar = new Date(value);
        let day = convDateCalendar.getDate();

        let elem = historyData.find(hist => hist.day.split('/')[0] === formatDay(day))

        if (elem) {
            setClickedTask(elem);
            setShowModal(true);
        } else {
            setShowModal(false);
        }
    }

    return (
        <HistoryArea color={backgroundColor}>
            <Title color={secondaryColor}>Histórico</Title>
            {!loading &&
                <>
                    <Calendar
                        className="calendar-style"
                        onChange={setCalendar}
                        value={calendar}
                        formatDay={(locale, date) => formatDate(date, 'd')}
                        onClickDay={viewHabits}
                    />
                    {showModal &&
                        <Modal>
                            <Header >
                                <DateC> Data: {clickedTask.day} </DateC>
                                <Button onClick={() => setShowModal(false)}>x</Button>
                            </Header>

                            {clickedTask.habits.map((habit, ind) => (
                                <Task key={ind} done={habit.done}>
                                    <TitleT>{habit.name}</TitleT>
                                    <Status>{habit.done ? 'Concluído' : 'Não Concluído'}</Status>
                                </Task>
                            ))}

                        </Modal>
                    }
                </>
            }
        </HistoryArea>
    );
}