import axios from 'axios';
import {useEffect, useState} from 'react'    // um Hook
import Pokemon from '../components/Pokemon';
import Todo from '../components/Pokemon';
import { Ul } from '../styles/styles';


function Main() {
  const [lista, setLista] = useState([])
  const [title, setTitle] = useState("")

  function handleCreation(event) {
    event.preventDefault()
    setLista([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25])
  }

    return (
      <div>
        <h1>Pokedex</h1>
        <form onSubmit={handleCreation} autoComplete="off">
          <label>Title</label>
          <input style={{padding: "0.5em"}} type="text" value={title} onChange={(event) => {setTitle(event.target.value)}}/>
        </form>
  
        <Ul>
          {lista.map( (listItem) =>   // pra cada item da lista, criar um li
            <Pokemon/>
          )}
        </Ul>
      </div>
    )
}

export default Main