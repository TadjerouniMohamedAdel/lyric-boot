import React , {useContext} from 'react'
import './Favorites.css'
import SongCard from '../SongCard/SongCard'
import { FavoriteContext } from '../../Contexts/FavoriteContext'


export default function Favorites() {
    
    const {favorites,dispatch} = useContext(FavoriteContext)
    
    
    return (
        <div className="favorites-container">
            {favorites.map(favorite=>(
                <SongCard song={favorite} isFavorite="favorite" toggleFavorite={dispatch} />
            ))}
        </div>
    )
}
