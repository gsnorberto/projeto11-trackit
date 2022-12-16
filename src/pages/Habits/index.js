import { useEffect, useState } from "react";
import { HabitsArea, AddHabit, Title, Button, NoHabits, NewHabit, Input, DaysWeek, ButtonsArea, CancelButton, ConfirmButton, RegisteredHabits } from "./styles";
import { backgroundColor } from "../../constants/colors";
import { mainColor, secondaryColor, inputColor, textColor } from "../../constants/colors";
import DayWeekButtons from "../../components/DayWeekButtons";
import RegisteredHabit from "../../components/RegisteredHabit";
import { ThreeDots } from "react-loader-spinner";
import { useContext } from "react";
import { Context } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../constants/urls";


export default () => {
    let array = [{}, {}];
    let { userData } = useContext(Context);
    let navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [listHabits, setListHabits] = useState([]);
    
    // Redireciona para home se o usuário não estiver autenticado
    useEffect(() => {
        if(!userData){
            navigate("/");
        } else {
            getHabits();
        }
    }, []);

    // Carregar hábitos do usuário
    const getHabits = () => {
        const config = {
            headers: { Authorization: `Bearer ${userData.token}` }
        }
        axios.get(BASE_URL + "/habits", config)
            .then(response => {
                setListHabits(response.data);
            })
            .catch(err => {
                localStorage.removeItem("userData");
                navigate("/");
            })
    }

    return (
        <HabitsArea color={backgroundColor}>
            <AddHabit>
                <Title color={secondaryColor}>Meus hábitos</Title>
                <Button color={mainColor}>+</Button>
            </AddHabit>

            <NewHabit>
                <Input inputColor={inputColor} color={textColor} placeholder="nome do hábito"></Input>
                <DaysWeek>
                    <DayWeekButtons />
                </DaysWeek>
                <ButtonsArea>
                    <CancelButton color={mainColor}>Cancelar</CancelButton>
                    <ConfirmButton color={mainColor}>
                        <ThreeDots
                            height="30"
                            width="40"
                            radius="9"
                            color="#FFFFFF"
                            ariaLabel="three-dots-loading"
                            wrapperStyle={{}}
                            wrapperClassName=""
                            visible={loading}
                        />
                        {loading ? '' : 'Salvar'}
                    </ConfirmButton>
                </ButtonsArea>
            </NewHabit>

            <RegisteredHabits>
                {array.map((a, ind) => <RegisteredHabit key={ind} />)}
            </RegisteredHabits>


            <NoHabits color={textColor}>
                Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
            </NoHabits>
        </HabitsArea>
    );
}