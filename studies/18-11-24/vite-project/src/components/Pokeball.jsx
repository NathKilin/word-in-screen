import axios from 'axios'
import {useState, useEffect} from 'react'

const Pokeball = () => {
    const [pokemons, setPokemons ] = useState([]);
    const fetchData = async () => {
        try{
            const { data: {results}} = await axios.get('http://pokiapi.co/api/v2/pokemon?Limit=100000&offset=0')
            setPokemons(results);
            console.log(results);
            ;
        } catch(error){
                console.log(error);
            }
        }

        useEffect(() => {

        }, [])

        return 
        <div>
            <ul>
                {pokemons.map(pokemon => {
                    return <li key={`pokemon-${index}`}>
                        <p>(pokemon.name)</p>

                    </li>
                })}
            </ul>
        </div>
}

export default Pokeball