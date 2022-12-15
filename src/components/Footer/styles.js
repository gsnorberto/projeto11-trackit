import styled from "styled-components";

export const FooterArea = styled.div`
    font-family: 'Lexend Deca', sans-serif;
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: #FFFFFF;
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px;
`
export const Button = styled.div`
    color: ${props => props.color};;
    cursor: pointer;

    &:hover{
        opacity: 0.8;
    }
`
export const CenterButton = styled.div`
    position: fixed;
    bottom: 15px;
    width: 90px;
    height: 90px;
    left: calc(50% - 45px);
    background-color: ${props => props.color};
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #FFFFFF;
    cursor: pointer;

    &:hover{
        opacity: 0.9;
    }
`

export const Border = styled.div`
    border: 5px solid #FFFFFF;
    border-radius: 50%;
    height: 90%;
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
`