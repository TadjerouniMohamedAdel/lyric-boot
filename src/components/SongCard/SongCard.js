import React from 'react'
import { Paper,Button, IconButton } from '@material-ui/core'
import { Link } from 'react-router-dom'
import BookIcon from '@material-ui/icons/Book';
import FavoriteIcon from '@material-ui/icons/Favorite';
import './SongCard.css'

export default function SongCard({song,isFavorite,toggleFavorite}) {
    console.log("song card",song)
    return (
        <Paper key={song.id} className="song-card">
        <div className="song-image">
            <img src={song.artist.picture_medium.replace("http","https").replace("e-cdn-images.deezer.com","cdns-images.dzcdn.net")} alt={`${song.artist.name}`}/>
        </div>
        <div className="song-favorite">
            <IconButton onClick={()=>toggleFavorite({type:"TOGGLE_FAVORITE",value:song})}>
                <FavoriteIcon className={isFavorite} style={{ fontSize: 26 }}/>
            </IconButton>
        </div>
        <div className="song-details">
            <div className="song-info">
                <h3>{song.title}</h3>
                <span><b>Artist:</b> <i>{song.artist.name}</i></span>
                <span><b>Album:</b> <i>{song.album.title}</i></span>
            </div>
            <div className="song-actions">
                <Link to={{pathname:"/lyric",state:{song:song}}} style={{textDecoration:"none"}}>
                    <Button  variant="contained" className="get-lyric" style={{color:"white",backgroundColor:"rgba(255,255,255,0.3)"}}>
                        <BookIcon style={{ fontSize: 16 }}/>
                        Get the lyric
                    </Button>
                </Link>
            </div>

        </div>
    </Paper>
    )
}
