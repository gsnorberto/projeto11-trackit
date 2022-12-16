
import { HabitArea, Title, TrashButton } from "./styles";
import DayWeekButtons from "../DayWeekButtons";
import { textColor } from "../../constants/colors";
import trashIcon from "../../assets/icons/trash-outline.svg";

export default ({ id, name, days }) => {

    return (
        <HabitArea>
            <Title color={textColor}>{name}</Title>
            <DayWeekButtons
                selectedDays={days}
                disabled={true}
            />
            <TrashButton color={textColor} src={trashIcon} />
        </HabitArea>
    );
}