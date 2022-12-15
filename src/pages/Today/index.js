import { TodayArea, Title, SubTitle } from "./styles";
import { backgroundColor } from "../../constants/colors";
import { secondaryColor } from "../../constants/colors";
import Task from "../../components/Task";

export default () => {
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