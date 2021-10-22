import styled from "styled-components"

export const Li = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: Arial, Helvetica, sans-serif;

    position: relative;
    padding: 16px;
    border-radius: 12px;
    list-style-type: none;
    text-align: start;

    user-select: none;
    background-color: ${props => props.background};
    color: black;
    cursor: pointer;

    box-shadow: 1px 1px 8px lightgrey;

    .pokemon-img {
        width: 200px;
        height: 200px;
    }

    &:hover {
        color: white;
        background-color: ${props => props.hoverColor};
        
        .pokemon-img {
            transition: .5s;
            transform: scale(1.07);
            filter: drop-shadow(0px 0px 1px black)
        }
        
        > strong {
            text-shadow: 0px 0px 1px black;
            transition: .3s;
            transform: scale(1.2);
        }

    }
`

export const PokemonId = styled.span`
    position: absolute;
    top: 0;
    right: 0;
    padding: 4px;
    color: white;
    background-color: ${props => props.color};
    border-top-right-radius: 12px;
    border-bottom-left-radius: 12px;
`


export const Kind = styled.span`
    background-color: ${props => props.color};
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    border-radius: 5px;
    margin: 0.5em;
    padding: 3px;
    color: black;
    align-items: center;
    font-weight: bold;
`