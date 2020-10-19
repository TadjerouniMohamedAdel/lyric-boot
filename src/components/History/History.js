import React,{useContext} from 'react'
import './History.css'
import { HistoryContext } from '../../Contexts/HistoryContext'
import { FavoriteContext } from '../../Contexts/FavoriteContext'
import SongCard from '../SongCard/SongCard'
import { Button } from '@material-ui/core'
import HistoryIcon from '@material-ui/icons/History';
export default function History() {
    const {history,dispatch: dispatchHistory} = useContext(HistoryContext)
    const {favorites,dispatch} = useContext(FavoriteContext)

    return (
        <div className="history-section">
            <Button
                variant="outlined"
                className="clear-history"
                onClick={(e)=>{dispatchHistory({type:"CLEAR_HISTORY"})}}
            >
                <HistoryIcon style={{marginRight:3}}/> 
                Clear History
            </Button>
            <div className="history-container">
                {history.map(song=>(
                    <SongCard 
                    song={song}  
                    toggleFavorite={dispatch}
                    isFavorite={favorites.findIndex(item =>item.id === song.id) >= 0 ? "favorite":"no-favorite"} 
                    />
                    ))}
            </div>
        </div>
    )
}
