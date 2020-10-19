import React,{ useState , useEffect , useContext } from 'react';
import TextField from '@material-ui/core/TextField';
import './Search.css'
import Axios from 'axios';
import SongCard from '../SongCard/SongCard';
import { FavoriteContext } from '../../Contexts/FavoriteContext';

export default function Search() {
    const [song,setSong] = useState('')
    const [suggests,setSuggests] = useState([])
    const {favorites,dispatch} =  useContext(FavoriteContext)

    useEffect(() => {
        console.log(song.split(" ").join("%20"))
        Axios({
            method:'get',
            url:` https://api.lyrics.ovh/suggest/${song}`
        }).then(response=>{
            console.log("suggest",response.data.data)
            setSuggests(response.data.data)
        }).catch(error=>{
            console.log("error request suggests",error)
        })
    }, [song])

    


    return (
        <div className="search-section">
            <TextField 
                value={song}
                className="search-input"
                label="Song" 
                variant="outlined" 
                placeholder="Title of the song" 
                onChange={(e)=>setSong(e.target.value)}
            />

        <div className="results-container">
            {suggests.map(suggest=>(
                
                // suggest.explicit_lyrics ==true &&
                 <SongCard 
                    song={suggest} 
                    toggleFavorite={dispatch} 
                    isFavorite={favorites.findIndex(item =>item.id === suggest.id) >= 0 ? "favorite":"no-favorite"}
                />
            ))}
        </div>

        </div>
                                    
            
    );
}

