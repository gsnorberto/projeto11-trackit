import styled from "styled-components";

export const HistoryArea = styled.div`
    font-family: 'Lexend Deca', sans-serif;
    min-height: 100vh;
    width: 100%;
    background-color: ${props => props.color};
    padding: 70px 30px;

    .calendar-style{
        width: 100%;
        border: 0;
        border-radius: 10px;
    }
    .bg-red{
        padding: 10px 5px;
        border-radius: 50%;
        background-color: #EA5766;
    }
    .bg-green{
        padding: 10px 5px;
        border-radius: 50%;
        background-color: #8CC654;
    }
`
export const Title = styled.div`
    color: ${props => props.color};
    margin-top: 30px;
    margin-bottom: 8px;
    font-size: 23px;
`
export const Desc = styled.div`
    color: ${props => props.color};
    margin-top: 20px;
    font-size: 18px;
`

