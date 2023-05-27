import errorImage from './error.png';
export default function PokemonErrorBackView({message}){
    return(
        <div role='alert'>
            <img 
            src={errorImage}
            width="240"
            alt="SadGirl"
            />
        </div>
    );
}