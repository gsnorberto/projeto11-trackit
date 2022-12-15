import styled from "styled-components";

export const HabitsArea = styled.div`
    font-family: 'Lexend Deca', sans-serif;
    min-height: 100vh;
    width: 100%;
    background-color: ${props => props.color};
    padding: 70px 30px;
    padding-bottom: 120px;
`
export const AddHabit = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 28px 0;
`
export const Title = styled.div`
    font-size: 23px;
    color: ${props => props.color};
`
export const Button = styled.button`
    width: 40px;
    height: 35px;
    border-radius: 5px;
    background-color: ${props => props.color};
    border: 0;
    font-size: 27px;
    color: #FFFFFF;
    cursor: pointer;

    &:hover{
        opacity: 0.8;
    }
`
export const NoHabits = styled.div`
    color: ${props => props.color};
`
export const NewHabit = styled.div`
    width: 100%;
    min-height: 180px;
    background-color: #FFFFFF;
    border-radius: 5px;
    padding: 20px;
    margin-bottom: 30px;
`
export const Input = styled.input`
    outline: 0;
    width: 100%;
    height: 45px;
    border-radius: 5px;
    font-size: 20px;
    border: 1px solid ${props => props.inputColor};
    padding: 0 15px;
    color: ${props => props.color};
    margin-bottom: 8px;

    &::placeholder{
        color: ${props => props.inputColor};
    }
`
export const DaysWeek = styled.div`
    display: flex;
`
export const ButtonsArea = styled.div`
    margin-top: 25px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`
export const CancelButton = styled.div`
    border: 0;
    border-radius: 5px;
    font-size: 16px;
    margin-right: 22px;
    color: ${props => props.color};
    cursor: pointer;

    &:hover{
        opacity: 0.8;
    }
`
export const ConfirmButton = styled.button`
    font-family: 'Lexend Deca', sans-serif;
    border: 0;
    border-radius: 5px;
    width: 84px;
    height: 35px;
    font-size: 16px;
    background-color: ${props => props.color};
    color: #FFFFFF;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover{
        opacity: 0.8;
    }
`
export const RegisteredHabits = styled.div`
    
`
