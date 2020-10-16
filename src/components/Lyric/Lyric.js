import React,{useEffect,useState} from 'react'
import './Lyric.css'
import {useLocation} from 'react-router-dom'
import { CircularProgress } from '@material-ui/core';
import Axios from 'axios';
export default function Lyric() {
    const location = useLocation();
    const [isLoading,setIsLoading] = useState(true)
    const [lyric,setLyric] = useState('')
    
    useEffect(() => {
        const song = location.state.song
        console.log(song)
        let title = song.title.split(" ").join("%20")
        let artist = song.artist.name.split(" ").join("%20")
        console.log(title,artist)
        Axios({
            method:'get',
            url:`https://api.lyrics.ovh/v1/${artist}/${title}`
        }).then(async response=>{
            console.log(response.data.lyrics)
            await setLyric(response.data.lyrics.replace(/\n/g,"<br/>"))
            setIsLoading(false)
        }).catch(error=>{
            console.log(error)
        })
    }, [])
    return (
        <div className="">
            {
                isLoading ?(
                    <CircularProgress />

                ):(
                    <p dangerouslySetInnerHTML={{__html: lyric}}></p>
                )
            }
        </div>
    )
}
