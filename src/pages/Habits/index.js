import { HabitsArea, AddHabit, Title, Button, NoHabits, NewHabit, Input, DaysWeek, ButtonsArea, CancelButton, ConfirmButton, RegisteredHabits } from "./styles";
import { backgroundColor } from "../../constants/colors";
import { mainColor, secondaryColor, inputColor, textColor } from "../../constants/colors";
import DayWeekButtons from "../../components/DayWeekButtons";
import RegisteredHabit from "../../components/RegisteredHabit";

export default () => {
    let array = [{}, {}];

    return(
        <HabitsArea color={backgroundColor}>
            <AddHabit>
                <Title color={secondaryColor}>Meus hábitos</Title>
                <Button color={mainColor}>+</Button>
            </AddHabit>

            <NewHabit>
                <Input inputColor={inputColor} color={textColor}  placeholder="nome do hábito"></Input>
                <DaysWeek>
                    <DayWeekButtons />
                </DaysWeek>
                <ButtonsArea>
                    <CancelButton color={mainColor}>Cancelar</CancelButton>
                    <ConfirmButton color={mainColor}>Salvar</ConfirmButton>
                </ButtonsArea>
            </NewHabit>

            <RegisteredHabits>
                {array.map((a, ind)=> <RegisteredHabit key={ind} />)}
            </RegisteredHabits>


            <NoHabits color={textColor}>
                Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
            </NoHabits>
        </HabitsArea>
    );
}