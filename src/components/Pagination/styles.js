import styled from "styled-components"

export const BtnPage = styled.button`
    width: 50px;
    height: 50px;
    border: none;
    border-radius: 50%;
    font-size: 2em;
    color: white;
    background-color: ${props => props.color};
    cursor: pointer;
`

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 1em;

    > input {
        font-size: 1em;
        width: 2em;
        height: 2em;
        
        text-align: center;
        font-size: 1.5em;
    }
`