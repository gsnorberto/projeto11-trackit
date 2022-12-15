import styled from "styled-components";

export const HabitArea = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    min-height: 90px;
    background-color: #FFFFFF;
    border-radius: 5px;
    margin-bottom: 10px;
    padding: 20px;
`

export const Title = styled.div`
    margin-bottom: 10px;
    color: ${props => props.color};
`

export const TrashButton = styled.img`
    position: absolute;
    right: 10px;
    top: 10px;
    width: 15px;
    cursor: pointer;
    filter: invert(37%) sepia(8%) saturate(7%) hue-rotate(336deg) brightness(99%) contrast(80%);
`