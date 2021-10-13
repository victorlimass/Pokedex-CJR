import styled from "styled-components"
import {useState} from 'react'

const Li = styled.li`
  border-radius: 16px;
  padding: 16px;
  margin: 16px;
  background-color: #3e4147;
  list-style-type: none;
  text-align: start;
  color: white;
`

const Div = styled.div`
    display: flex;
    flex-direction: column;
`


// Componente, funcao que retorna um jsx
// props eh um objeto com varios parametros (properties)
// className pois class eh reservado
function Pokemon() {
  return (
    <Li>
      <Div>
        <span>Nome do pokemon</span>
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"/>
      </Div>
    </Li>
    )
  }

export default Pokemon