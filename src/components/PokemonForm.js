import { Component } from "react";
import {ImSearch} from 'react-icons/im';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class PokemonForm extends Component {
    state = {
        pokemonName:'',
    }
    handleChange = event => {
        this.setState({pokemonName: event.currentTarget.value.toLowerCase() });
    }

    handleSubmit = event => {
        const { pokemonName} = this.state;
        event.preventDefault();

        if(pokemonName.trim() === ''){
            toast.error('Введите имя покемона');
            return;
        }

        this.props.onSubmit(pokemonName);
        this.setState({pokemonName: ''});
    }

    render(){
        const { pokemonName} = this.state;
        return(
            <form onSubmit={this.handleSubmit}>
                <input
                type="text"
                name="pokemonName"
                value={pokemonName}
                onChange={this.handleChange}
                />

                <button type="submit">
                    <ImSearch style={{marginRight: 8}} />
                    Search              
                </button>
            </form>
        )
    }


}