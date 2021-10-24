import {useEffect, useState} from 'react'    // um Hook
import Pagination from '../../components/Pagination/Pagination';
import Pokemon from '../../components/Pokemon/Pokemon';
import api from '../../resources/api';
import { Container, Ul, SearchBar, SearchBtn } from './styles';
import SearchIcon from "@material-ui/icons/Search";

function Main() {
    const [pokemonPage, setPokemonPage] = useState([])  // dados dos pokemons da pagina
    const [pokemonList, setPokemonList] = useState([])
    const [input, setInput] = useState("")  // pesquisa do usuario
    const [pageInput, setPageInput] = useState(1)  // pagina digitada
    const [currentPage, setCurrentPage] = useState(1)
    
    useEffect(() => {
        async function getPokemonPage(){
            setPageInput(currentPage)
            api.get(`/pokemons/?page=${currentPage}/`)
            .then((resp)=>{
                setPokemonPage(resp.data)
                // a lista recebe 25 pokemon da pagina especificada
                setPokemonList(resp.data.data)
            })
            .catch((err)=>{
                console.log("erro: " + err)
            })
        }
        getPokemonPage()
    }, [currentPage])
    
    
    // ao pesqusar o pokemon, apenas o pokemon pesquisado aparece
    function handleSearch(event) {
        event.preventDefault()
        
        async function getPokemon(){
            api.get(`/pokemons/${input.toLowerCase()}`)
            .then((resp)=>{
                if (resp.data !== null) {
                    if (input !== "") { // resp.data retornou apenas 1 pokemon
                        setPokemonPage(null)
                        setPokemonList([resp.data])
                    } else {    // resp.data retornou a pagina 1 inteira
                        setPokemonPage(resp.data)
                        setPokemonList(resp.data.data)
                    }
                } else {    // nenhum pokemon corresponde a pesquisa
                    // trigger useEffect
                    setCurrentPage(prevPage => prevPage !== 1 ? 1 : 0)
                }
            })
            .catch((err)=>{
                console.log("erro:", err)
            })
        }
        getPokemon()
    }
    
    // clica para avancar ou voltar uma pagina
    function handleBtnPageClick(next) {
        if (pokemonPage !== null) {
            if (next && pokemonPage.next_page !== null) {
                let nextPage = currentPage + 1
                setCurrentPage(nextPage)
            } else if (!next && pokemonPage.prev_page !== null) {
                let prevPage = currentPage - 1 
                setCurrentPage(prevPage)
            }
        }
    }
    
    // enter apos digitar uma pagina
    function handlePageEnter(input) {
        if (input <= 33) {  // numero maximo de paginas
            setCurrentPage(parseInt(input));
        } else {
            setCurrentPage(33);
            setPageInput(33)
        }
    }
    
    
    return (
      <Container>
        <form onSubmit={handleSearch} autoComplete="off">
          <SearchBar type="text" placeholder="Pesquise um Pokémon!"
            value={input} onChange={(event) => {setInput(event.target.value)}}/>
          <SearchBtn>
            <SearchIcon />
          </SearchBtn>
        </form>
          
  
        <Ul>
          {pokemonList.map((pokemon) =>
            <Pokemon key={pokemon.id} pokemon={pokemon}/>
          )}
        </Ul>
  
        <br/>
        { pokemonPage !== null ?
          <Pagination handleBtnPageClick={handleBtnPageClick}
                      handlePageEnter={handlePageEnter}
                      input={pageInput}
                      setInput={setPageInput}
                      setCurrentPage={setCurrentPage}/>
          : 
          <br/>
        }
        <br/>
      </Container>
    )
}
export default Main
