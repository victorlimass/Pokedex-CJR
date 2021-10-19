import {useEffect, useState} from 'react'    // um Hook
import Pokemon from '../../components/Pokemon/Pokemon';
import api from '../../resources/api';
import { Container, Ul, SearchBar, SearchBtn } from './styles';



function Main() {
    const [pokemonList, setPokemonList] = useState([])
    const [input, setInput] = useState("")
    const currentPage = 1;  // TODO: estado para a pagina atual

    useEffect(() => {
        async function getPokemonPage(){
            api.get(`/pokemons/?page=${currentPage}/`)
            .then((resp)=>{
                // a lista recebe 25 pokemon da pagina especificada
                setPokemonList(resp.data.data)
            })
            .catch((err)=>{
                console.log("erro: " + err)
            })
        }
        getPokemonPage()
      }, [])


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
          {pokemonList.map((pokemon) =>
            <Pokemon key={pokemon.id} pokemon={pokemon}/>
          )}
        </Ul>
      </Container>
    )

}

export default Main

