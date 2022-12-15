import styled from "styled-components";

export const LoginArea = styled.div`
    font-family: 'Lexend Deca', sans-serif;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .link{

    }
`
export const Logo = styled.img`
    width: 180px;
    margin-bottom: 30px;
`
export const Input = styled.input`
    font-family: 'Lexend Deca', sans-serif;
    border: 1px solid #D4D4D4;
    margin-bottom: 5px;
    height: 45px;
    width: 300px;
    padding: 0 10px;
    outline: none;
    border-radius: 5px;
    font-size: 20px;

    &::placeholder{
        color: #DBDBDB;
    }
`
export const Button = styled.button`
    font-family: 'Lexend Deca', sans-serif;
    width: 300px;
    border: 0;
    background-color: ${props => props.color} ;
    color: #FFFFFF;
    border-radius: 5px;
    padding: 8px 0;
    margin-bottom: 25px;
    font-size: 20px;
    cursor: pointer;

    &:hover{
        opacity: 0.8;
    }
`
export const Btn = styled.div`
    color: ${props => props.color};
    text-decoration: underline ${props => props.color};
    &:hover{
        opacity: 0.8;
    }
`

