import styled from "styled-components";

export const Button = styled.div`
    border: 1px solid ${props => props.color};
    color: ${props => props.checked ? '#FFFFFF' : props.color};
    background-color: ${props => props.checked ? props.color : '#FFFFFF'};
    padding: 5px 8px;
    font-size: 20px;
    border-radius: 5px;
    margin-right: 3px;
    margin-bottom: 3px;
    cursor: pointer;

    &:hover{
        opacity: 0.8;
    }
`
export const ButtonsArea = styled.div`
    display: flex;
    flex-wrap: wrap;
`