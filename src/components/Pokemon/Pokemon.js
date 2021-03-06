import { Li, PokemonId, Kind } from './styles';
import Colors from '../../resources/colors';

function Pokemon({pokemon}) {
    // nome com a primeira letra maiuscula
    let name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
    let kinds = pokemon.kind.split(';')
    let colorKind = Colors[kinds[0]]
    let colorKindLight = colorKind.concat("AA") // cor com transparencia

    return (
      <Li key={pokemon.id} background={Colors.pokemonBackground} hoverColor={colorKindLight}>
        <PokemonId color={colorKind}># {pokemon.id}</PokemonId>
        <strong style={{fontSize: '1.1em'}}>{name}</strong>
        <img className='pokemon-img' draggable='false' src={pokemon.image_url}/>
        <div style={{display: 'inline'}}>
          {kinds.map(kind => <Kind color={Colors[kind]}>{`${kind}`}</Kind>)}
        </div>
      </Li>
    )
}

export default Pokemon