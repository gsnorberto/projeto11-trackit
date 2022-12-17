
import { HabitArea, Title, TrashButton } from "./styles";
import DayWeekButtons from "../DayWeekButtons";
import { textColor } from "../../constants/colors";
import trashIcon from "../../assets/icons/trash-outline.svg";
import axios from "axios";

import { BASE_URL } from "../../constants/urls";

import { useNavigate } from "react-router";

import { getLocalStorage } from "../../localStorage";

export default ({ id, name, days, getHabits }) => {
    let locStorage = getLocalStorage();
    
    let navigate = useNavigate;

    // Deletar Hábito
    const handleDeleteHabit = () => {
        if (window.confirm("Tem certeza que deseja excluir esse hábito?")) {
            const config = {
                headers: { Authorization: `Bearer ${locStorage.token}` }
            }
            axios.delete(BASE_URL + `/habits/${id}`, config)
                .then(res => {
                    getHabits();
                })
                .catch(err => {
                    localStorage.removeItem("userData");
                    navigate("/");
                })
        }
    }

    return (
        <HabitArea>
            <Title color={textColor}>{name}</Title>
            <DayWeekButtons
                selectedDays={days}
                disabled={true}
            />
            <TrashButton onClick={handleDeleteHabit} color={textColor} src={trashIcon} />
        </HabitArea>
    );
}