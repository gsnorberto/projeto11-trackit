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
    const handleCheckHabit = () => {
        let url;
        const config = {
            headers: { Authorization: `Bearer ${userData.token}` }
        }
        const body = {}

        if(done){ // Se a tarefa estiver marcada como feita
            url = BASE_URL + `/habits/${id}/uncheck`
        } else {
            url = BASE_URL + `/habits/${id}/check`
        }

        axios.post(url, body, config)
            .then(() => {
                getHabitsToday();
            })
            .catch(err => {
                alert("Ops! Ocorreu um erro");
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
                onClick={handleCheckHabit}
                src={checkIcon}
            />
        </TaskArea>
    );
}