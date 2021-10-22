import styled from "styled-components"

export const Li = styled.li`
    position: relative;
    padding: 16px;
    border-radius: 12px;
    list-style-type: none;
    text-align: start;
    user-select: none;
    background-color: #1e1117;
    color: white;
    cursor: pointer;

    * img {
        width: 200px;
        height: 200px;
    }

    &:hover * img {
        transition: .5s;
        transform: scale(1.07);
    }
`

export const PokeNumber = styled.span`
    position: absolute;
    top: 0;
    right: 0;
    padding: 4px;
    background-color: #E3350DEE;
    border-top-right-radius: 12px;
    border-bottom-left-radius: 12px;

`