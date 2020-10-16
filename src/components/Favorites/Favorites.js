import React from 'react'
import './Favorites.css'
import SongCard from '../SongCard/SongCard'


export default function Favorites({favorites,deleteFavorite}) {
    

   
    
    
    return (
        <div className="favorites-container">
            {favorites.map(favorite=>(
                <SongCard song={favorite} deleteSong={deleteFavorite} />
            ))}
        </div>
    )
}
