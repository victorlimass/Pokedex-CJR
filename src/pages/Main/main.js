import {useState} from 'react'    // um Hook
import Pokemon from '../../components/Pokemon/Pokemon';
import { Container, Ul, SearchBar, SearchBtn } from './styles';


function Main() {
  // por enquanto so uma lista com 25 itens
  const [pokemonList, setPokemonList] = useState([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25])
  const [input, setInput] = useState("")

  function handleSearch(event) {
    event.preventDefault()
  }

  return (
    <Container>
      <h1>Pokédex</h1>
      <form onSubmit={handleSearch} autoComplete="off">
        <SearchBar type="text" placeholder="Pesquise um Pokémon!"
          value={input} onChange={(event) => {setInput(event.target.value)}}/>
        <SearchBtn>Pesquisar</SearchBtn>
      </form>

      <Ul>
        {pokemonList.map( () =>   // pra cada item da lista, criar um li (pokemon)
          <Pokemon/>
        )}
      </Ul>
    </Container>
  )
}

export default Main