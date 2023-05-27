import { Component } from "react";
import PokemonErrorBackView from "./PokemonErrorBackView";
import PokemonDataView from "./PokemonDataInfo";
import PokemonPendingView from "./POkemonPendingView";

export default class PokemonInfo extends Component {
    state = {
        pokemon: null,
        error: null,
        status: 'idle',
    }

    componentDidUpdate(prevProps) {

        const prevName = prevProps.pokemonName;
        const nextName = this.props.pokemonName;
       
        if(prevName !== nextName){
            this.setState({status: 'pending'});
            setTimeout(() => {
            fetch(`https://pokeapi.co/api/v2/pokemon/${nextName}`)
            .then(res => {
                if(res.ok){
                    return res.json();
                }
                return Promise.reject(
                    new Error(`Нет покемона с именем ${nextName}`),
                );
            })
            .then(pokemon => this.setState({pokemon, status: 'resolved'}))
            .catch(error => this.setState({error, status: 'rejected' }))
            }, 1000);   
        }
    }
    render(){
        const {pokemon, error, status} = this.state;
        const {pokemonName} = this.props;

        if(status === 'idle') {
            return <div>Введите имя покемона</div>
        }
        if(status === 'pending'){
            return <PokemonPendingView pokemonName={pokemonName}/>
        }
        if(status === 'rejected'){
            return (
                <div>
            <PokemonErrorBackView  message={error.message}/>
            <p>{error.message}</p>
            </div>
            )
        }
        if(status === 'resolved') {
            return (
                <div>
                <PokemonDataView pokemon={pokemon}/>
                </div>
            );
        }
    }  
}