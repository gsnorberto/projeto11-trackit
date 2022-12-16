import { TaskArea, TextArea, Title, SubTitle, CheckIcon } from './styles';
import { textColor } from '../../constants/colors';
import checkIcon from "../../assets/icons/checkbox.svg";

export default ({name, done, currentSequence, highestSequence}) => {
    return(
        <TaskArea>
            <TextArea>
                <Title color={textColor}>{name}</Title>
                <SubTitle color={textColor}>Sequência atual: {currentSequence} dias </SubTitle>
                <SubTitle color={textColor}>Seu recorde: {highestSequence} dias </SubTitle>
            </TextArea>
            <CheckIcon checked={done} src={checkIcon}/>
        </TaskArea>
    );
}