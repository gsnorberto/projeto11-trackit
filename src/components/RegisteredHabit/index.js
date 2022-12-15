
import { HabitArea, Title, TrashButton } from "./styles";
import DayWeekButtons from "../DayWeekButtons";
import { textColor } from "../../constants/colors";
import trashIcon from "../../assets/icons/trash-outline.svg";

export default () => {

    return (
            <HabitArea>
                <Title color={textColor}>Titulo</Title>
                <DayWeekButtons />
                <TrashButton color={textColor} src={trashIcon} />
            </HabitArea>
    );
}