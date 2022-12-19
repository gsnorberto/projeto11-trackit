import styled from "styled-components";

export const HistoryArea = styled.div`
    font-family: 'Lexend Deca', sans-serif;
    min-height: 100vh;
    width: 100%;
    background-color: ${props => props.color};
    padding: 80px 30px;

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
export const Modal = styled.div`
    padding: 15px 15px;
    padding-top: 20px;
    margin-top: 10px;
    border-radius: 10px;
    width: 100%;
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
`
export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
`
export const DateC = styled.div`
    font-size: 15px;
`
export const Button = styled.button`
    border: 0;
    font-weight: 700;
    cursor: pointer;
    border-radius: 50%;
    padding: 3px 7px;
    font-size: 15px;
`

export const Task = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
    font-size: 15px;
    color: ${props => props.done ? '#8CC654' : '#EA5766'}
`
export const TitleT = styled.div`
    word-break: break-all;
    margin-right: 20px;
`
export const Status = styled.div`
    margin-left: 5px;
    min-width: 110px;
    text-align: right;
`


