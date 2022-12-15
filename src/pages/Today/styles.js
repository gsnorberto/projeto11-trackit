import styled from "styled-components";

export const TodayArea = styled.div`
    font-family: 'Lexend Deca', sans-serif;
    min-height: 100vh;
    width: 100%;
    background-color: ${props => props.color};
    padding: 70px 30px;
`
export const Title = styled.div`
    color: ${props => props.color};
    margin-top: 30px;
    margin-bottom: 8px;
    font-size: 23px;
`
export const SubTitle = styled.div`
    color: #BABABA;
    font-size: 18px;
    margin-bottom: 30px;
`