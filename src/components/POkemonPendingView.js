import {ImSpinner} from 'react-icons/im';
import pendingImage from './pending.png';
import PokemonDataView from './PokemonDataInfo';

export default function PokemonPendingView({pokemonName}){
    const pokemon = {
        name: pokemonName,
        sprites: {
            other: {
                'official-artwork':{
                    front_default: pendingImage,
                },
            },
        },
        stats: [],
    };


    return (
        <div role='alert'>
            <ImSpinner size="32" className='icon-spin' />
            Loading...
            <PokemonDataView pokemon={pokemon} />
        </div>
    )
}