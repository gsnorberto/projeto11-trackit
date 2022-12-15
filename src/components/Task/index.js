import { TaskArea, TextArea, Title, SubTitle, CheckIcon } from './styles';
import { textColor } from '../../constants/colors';
import checkIcon from "../../assets/icons/checkbox.svg";

export default () => {
    let checked = false;

    return(
        <TaskArea>
            <TextArea>
                <Title color={textColor}>Ler 1 capítulo por dia</Title>
                <SubTitle color={textColor}>Sequência atual: 3 dias </SubTitle>
                <SubTitle color={textColor}>Seu recorde: 5 dias </SubTitle>
            </TextArea>
            <CheckIcon checked={checked} src={checkIcon}/>
        </TaskArea>
    );
}