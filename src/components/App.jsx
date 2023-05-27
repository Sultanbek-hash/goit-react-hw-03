import { Component } from "react";
import PokemonForm from "./PokemonForm";
import {ToastContainer} from 'react-toastify';
import PokemonInfo from "./PokemonInfo";


export default class App extends Component {
    state = {
        pokemonName: '',
    };

    handleSubmit = pokemonName => {
        this.setState({ pokemonName });
    };

    render() {
        const {pokemonName} = this.state;
        return (
            <div>
           <PokemonForm onSubmit={this.handleSubmit}/> 
           <PokemonInfo 
            pokemonName={pokemonName}
           />
           <ToastContainer 
            autoClose={3000}
           />
           </div>
        )
    }
}