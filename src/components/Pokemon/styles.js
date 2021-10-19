import styled from "styled-components"

export const Li = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 16px;
    border-radius: 5%;
    list-style-type: none;
    text-align: start;
    user-select: none;
    background-color: #1e1117;
    color: white;
    
    > img {
        width: 200px;
        height: 200px;

        &:hover {
            transition: .5s;
            transform: scale(1.07);
        }
    }

  cursor: pointer;
`