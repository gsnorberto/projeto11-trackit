import { useContext, useEffect, useState } from "react";
import { HabitsArea, AddHabit, Title, Button, NoHabits, NewHabit, Input, DaysWeek, ButtonsArea, CancelButton, ConfirmButton, RegisteredHabits } from "./styles";
import { backgroundColor } from "../../constants/colors";
import { mainColor, secondaryColor, inputColor, textColor } from "../../constants/colors";
import DayWeekButtons from "../../components/DayWeekButtons";
import RegisteredHabit from "../../components/RegisteredHabit";
import { ThreeDots } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../constants/urls";

import { Context } from "../../context/AuthContext"


export default () => {
    let { userData } = useContext(Context);
    let navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [listHabits, setListHabits] = useState([]);
    const [showRegister, setShowRegister] = useState(false);
    const [selectedDays, setSelectedDays] = useState([]);
    const [habitName, setHabitName] = useState('');

    // Redireciona para home se o usuário não estiver autenticado
    useEffect(() => {
        if (!userData) {
            navigate("/");
        } else {
            getHabits();
        }
    }, []);

    // Carregar hábitos do usuário
    const getHabits = () => {
        const config = {
            headers: { Authorization: `Bearer ${userData.token}` }
        }
        axios.get(BASE_URL + "/habits", config)
            .then(response => {
                setListHabits(response.data);
            })
            .catch(err => {
                localStorage.removeItem("userData");
                navigate("/");
            })
    }

    // Adicionar Novo hábito
    const addHabit = () => {
        if(habitName === ''){
            alert("Digite um título para seu hábito");
        } else if (selectedDays.length === 0){
            alert("Selecione os dias da semana")
        } else {
            setLoading(true);

            let data = {
                name: habitName,
                days: selectedDays
            }

            const config = {
                headers: { Authorization: `Bearer ${userData.token}` }
            }

            axios.post(BASE_URL + "/habits", data, config)
                .then((res) => {
                    setLoading(false);
                    setShowRegister(false);
                    setHabitName('');
                    setSelectedDays([]);
                    getHabits();
                })
                .catch((err) => {
                    setLoading(false);
                    alert(err.response.data.message)
                });
        }
    }

    return (
        <HabitsArea color={backgroundColor}>
            <AddHabit>
                <Title color={secondaryColor}>Meus hábitos</Title>
                <Button onClick={() => setShowRegister(true)} color={mainColor}>+</Button>
            </AddHabit>

            {/* Área de cadastro de hábito */}
            {showRegister &&
                <NewHabit>
                    <Input
                        disabled={loading}
                        value={habitName}
                        onChange={(e) => setHabitName(e.target.value)}
                        inputColor={inputColor}
                        color={textColor} placeholder="nome do hábito"
                    />
                    <DaysWeek>
                        <DayWeekButtons
                            selectedDays={selectedDays}
                            setSelectedDays={setSelectedDays}
                            disabled={loading}
                        />
                    </DaysWeek>
                    <ButtonsArea>
                        <CancelButton onClick={() => setShowRegister(false)} color={mainColor}>Cancelar</CancelButton>
                        <ConfirmButton disabled={loading} onClick={addHabit} color={mainColor}>
                            <ThreeDots
                                height="30"
                                width="40"
                                radius="9"
                                color="#FFFFFF"
                                ariaLabel="three-dots-loading"
                                wrapperStyle={{}}
                                wrapperClassName=""
                                visible={loading}
                            />
                            {loading ? '' : 'Salvar'}
                        </ConfirmButton>
                    </ButtonsArea>
                </NewHabit>
            }

            {/* Hábitos cadastrados */}
            {listHabits.length === 0 ?
                <NoHabits color={textColor}>
                    Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
                </NoHabits> :

                <RegisteredHabits>
                    {listHabits.map((habit, ind) => (
                        <RegisteredHabit
                            key={ind}
                            id={habit.id}
                            name={habit.name}
                            days={habit.days}
                            getHabits={getHabits}
                        />))}
                </RegisteredHabits>
            }


        </HabitsArea>
    );
}