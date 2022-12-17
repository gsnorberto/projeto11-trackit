import styled from "styled-components";

export const HeaderArea = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    font-family: 'Playball', cursive;
    background-color: ${props => props.color};
    width: 100%;
    height: 70px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
    color: #FFFFFF;
    font-size: 40px;
`;
export const Title = styled.div`

`;
export const Menu = styled.div`
    display: flex;
    align-items: center;
`;
export const Button = styled.div`
    font-family: 'Lexend Deca', sans-serif;
    font-size: 20px;
    margin-right: 15px;
    cursor: pointer;
    &:hover{
        opacity: 0.8;
    }
`;
export const Avatar = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
`;