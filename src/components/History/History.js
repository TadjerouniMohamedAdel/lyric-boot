import React,{useContext} from 'react'
import './History.css'
import { HistoryContext } from '../../Contexts/HistoryContext'
import { FavoriteContext } from '../../Contexts/FavoriteContext'
import SongCard from '../SongCard/SongCard'
export default function History() {
    const {history} = useContext(HistoryContext)
    const {favorites,dispatch} = useContext(FavoriteContext)

    return (
        <div className="history-container">
            {history.map(song=>(
                <SongCard 
                    song={song}  
                    toggleFavorite={dispatch}
                    isFavorite={favorites.findIndex(item =>item.id === song.id) >= 0 ? "favorite":"no-favorite"} 
                />
            ))}
        </div>
    )
}
