import { Li, PokeNumber } from './styles';

function Pokemon({pokemon}) {
    // nome com a primeira letra maiuscula
    let name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
    return (
      <Li>
        <PokeNumber>#{pokemon.id}</PokeNumber>
        <div style={{display: "flex", flexDirection: "column", alignItems: 'center'}}>
          <strong>{name}</strong>
          <img src={pokemon.image_url}/>
        </div>
      </Li>
    )
}

export default Pokemon