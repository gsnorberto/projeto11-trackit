import { TaskArea, TextArea, Title, SubTitle, CheckIcon } from './styles';
import { textColor } from '../../constants/colors';
import checkIcon from "../../assets/icons/checkbox.svg";
import axios from 'axios';
import { useContext } from 'react';
import { Context } from '../../context/AuthContext';
import { BASE_URL } from '../../constants/urls';
import { useNavigate } from 'react-router';

export default ({ id, name, done, currentSequence, highestSequence, getHabitsToday }) => {
    let { userData } = useContext(Context);
    let navigate = useNavigate();


    // Marcar hábito como feito
    const checkHabit = () => {
        const config = {
            headers: { Authorization: `Bearer ${userData.token}` }
        }
        const body = {}

        axios.post(BASE_URL + `habits/${id}/check`, body, config)
            .then(() => {
                getHabitsToday();
            })
            .catch(err => {
                alert("Ops! Ocorreu um erro ao marcar a tarefa: ");
                navigate("/");
            })
    }

    // Desmarcar hábito como feito
    const uncheckHabit = () => {
        const config = {
            headers: { Authorization: `Bearer ${userData.token}` }
        }
        const body = {}

        axios.post(BASE_URL + `habits/${id}/uncheck`, body, config)
            .then(() => {
                getHabitsToday();
            })
            .catch(err => {
                alert("Ops! Ocorreu um erro ao desmarcar a tarefa!");
                navigate("/");
            })
    }

    return (
        <TaskArea>
            <TextArea>
                <Title color={textColor}>{name}</Title>
                <SubTitle color={textColor}>Sequência atual: {currentSequence} dias </SubTitle>
                <SubTitle color={textColor}>Seu recorde: {highestSequence} dias </SubTitle>
            </TextArea>
            <CheckIcon
                checked={done}
                onClick={done ? uncheckHabit : checkHabit}
                src={checkIcon}
            />
        </TaskArea>
    );
}