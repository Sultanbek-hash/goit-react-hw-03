export default function PokemonDataView ({pokemon: {sprites, name, stats}}){
    return (
        <div>
            <img 
                src={sprites.other['official-artwork'].front_default}
                alt=""
                width="300"
                />
                 <p>{name}</p>
                 <ul>
                    {stats.map(entry => (
                        <li key={entry.stat.name}>
                            {entry.stat.name}: {entry.base_stat}
                        </li>
                    ))}
                 </ul>
        </div>
    );
}