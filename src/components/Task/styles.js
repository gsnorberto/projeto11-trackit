import styled from "styled-components";

export const TaskArea = styled.div`
    font-family: 'Lexend Deca', sans-serif;
    min-height: 95px;
    width: 100%;
    background-color: #FFFFFF;
    border-radius: 5px;
    padding: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
`

export const TextArea = styled.div`
    display: flex;
    flex-direction: column;
`

export const Title = styled.div`
    margin-bottom: 10px;
    font-size: 20px;
    color: ${props => props.color};
`

export const SubTitle = styled.div`
    font-size: 13px;
    margin-top: 5px;
    color: ${props => props.color};
`

// export const CheckIcon = styled.img`
//     max-height: 69px;
//     filter: ${props => props.checked ? 'invert(98%) sepia(30%) saturate(5982%) hue-rotate(24deg) brightness(93%) contrast(62%)' : 'invert(96%) sepia(0%) saturate(1569%) hue-rotate(269deg) brightness(117%) contrast(81%)'};
//     cursor: pointer;
// `

export const Span = styled.span`
    color: ${props => props.color};
`
