import { Li } from './styles';

function Pokemon({pokemon}) {
    // nome com a primeira letra maiuscula
    let name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
    return (
      <Li>
        <strong>{name}</strong>
        <img src={pokemon.image_url}/>
      </Li>
    )
}

export default Pokemon