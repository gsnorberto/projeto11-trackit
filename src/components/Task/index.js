import { TaskArea, TextArea, Title, SubTitle, Span } from './styles';
import { textColor } from '../../constants/colors';
import axios from 'axios';
import { BASE_URL } from '../../constants/urls';
import { useNavigate } from 'react-router';
import { useContext } from 'react';
import { Context } from '../../context/AuthContext';
import { IoCheckbox } from "react-icons/io5";

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

        if (done) { // Se a tarefa estiver marcada como feita
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
        <TaskArea data-test="today-habit-container">
            <TextArea>
                <Title data-test="today-habit-name"  color={textColor}>{name}</Title>
                <SubTitle data-test="today-habit-sequence" color={textColor}>
                    Sequência atual:{'\u00A0'}
                    <Span color={done ? '#8FC549' : ''}>
                        {currentSequence} dias
                    </Span>
                </SubTitle>
                <SubTitle data-test="today-habit-record" color={textColor}>
                    Seu recorde: {'\u00A0'}
                    <Span color={currentSequence === highestSequence && currentSequence !== 0 ? '#8FC549' : ''}>
                        {highestSequence} dias
                    </Span>
                </SubTitle>
            </TextArea>
            <IoCheckbox
                data-test="today-habit-check-btn"
                color={done ? '#8FC549' : '#EBEBEB'}
                cursor='pointer'
                fontSize="69px"
                onClick={handleCheckHabit}
            />
        </TaskArea>
    );
}