import React , {useContext} from 'react'
import './Favorites.css'
import SongCard from '../SongCard/SongCard'
import { FavoriteContext } from '../../Contexts/FavoriteContext'
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';

export default function Favorites() {
    
    const {favorites,dispatch} = useContext(FavoriteContext)
    
    
    return (
        <div className="favorites-container">
            {favorites.length >0 ? favorites.map(favorite=>(
                <SongCard song={favorite} isFavorite="favorite" toggleFavorite={dispatch} />
            ))
             : (
                <div className="lyric-content-error">
                <p>
                    <SentimentVeryDissatisfiedIcon style={{fontSize:80}}/> <br/>
                    You have no favorite songs!

                </p>
            </div>
             )   
            }
        </div>
    )
}
