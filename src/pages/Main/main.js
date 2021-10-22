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


    function handleSearch(event) {
        event.preventDefault()
    }

    // clica para avancar ou voltar uma pagina
    function handleBtnPageClick(next) {
        if (next && pokemonPage.next_page != null) {
            let nextPage = currentPage + 1
            setCurrentPage(nextPage);
            setPageInput(nextPage)
        } else if (!next && pokemonPage.prev_page != null) {
            let prevPage = currentPage - 1 
            setCurrentPage(prevPage);
            setPageInput(prevPage)
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
        <h1>Pokédex</h1>
        <a href="./login">Login</a>
        <form onSubmit={handleSearch} autoComplete="off">
          <SearchBar type="text" placeholder="Pesquise um Pokémon!"
            value={input} onChange={(event) => {setInput(event.target.value)}}/>
          <SearchBtn >
            <SearchIcon />
          </SearchBtn>
        </form>

        <Ul>
          {pokemonList.map((pokemon) =>
            <Pokemon key={pokemon.id} pokemon={pokemon}/>
          )}
        </Ul>

        <br/>
        <Pagination handleBtnPageClick={handleBtnPageClick}
                    handlePageEnter={handlePageEnter}
                    input={pageInput}
                    setInput={setPageInput}
                    setCurrentPage={setCurrentPage}/>

      </Container>
    )

}

export default Main

