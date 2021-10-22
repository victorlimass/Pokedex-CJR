import { Li, PokeNumber, Kind } from './styles';

function Pokemon({pokemon}) {
    // nome com a primeira letra maiuscula
    let name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
    let kinds = pokemon.kind.split(';')
    return (
      <Li>
        <PokeNumber># {pokemon.id}</PokeNumber>
        <strong>{name}</strong>
        <img src={pokemon.image_url}/>

        <div style={{display: 'inline'}}>
          {kinds.map(kind => <Kind color={"#BB10A0"}>{`${kind}`}</Kind>)}
        </div>


      </Li>
    )
}

export default Pokemon