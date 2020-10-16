import React from 'react'
import { Paper,Button, IconButton } from '@material-ui/core'
import { Link } from 'react-router-dom'
import BookIcon from '@material-ui/icons/Book';
import CloseIcon from '@material-ui/icons/Close';
import './SongCard.css'

export default function SongCard({song,deleteSong}) {
    return (
        <Paper key={song.id} className="song-card">
        <div className="song-image">
            <img src={song.artist.picture_medium} />
        </div>
        <div className="song-close">
            <IconButton onClick={()=>deleteSong(song.id)}>
                <CloseIcon style={{ fontSize: 26 ,color:'white'}}/>
            </IconButton>
        </div>
        <div className="song-details">
            <div className="song-info">
                <h3>{song.title}</h3>
                <span><b>Artist:</b> <i>{song.artist.name}</i></span>
                <span><b>Album:</b> <i>{song.album.title}</i></span>
                <audio controls className="audio" >
                    <source src={song.preview} type="audio/mpeg" />
                </audio>
            </div>

        </div>
        <div className="song-actions">
             <Link to={{pathname:"/lyric",state:{song:song}}} style={{textDecoration:"none"}}>
                <Button  variant="contained" style={{color:"white",backgroundColor:"rgba(255,255,255,0.3)"}}>
                    <BookIcon style={{ fontSize: 16 }}/>
                    Get the lyric
                </Button>
             </Link>
        </div>
    </Paper>
    )
}
