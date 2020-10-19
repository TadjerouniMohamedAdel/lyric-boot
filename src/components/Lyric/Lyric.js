import React,{useEffect,useState,useContext} from 'react'
import './Lyric.css'
import {useLocation} from 'react-router-dom'
import { CircularProgress } from '@material-ui/core';
import Axios from 'axios';
import { HistoryContext } from '../../Contexts/HistoryContext';
export default function Lyric() {
    const location = useLocation();
    const [isLoading,setIsLoading] = useState(true)
    const [lyric,setLyric] = useState('')
    const song = location.state.song
     const {dispatch} = useContext(HistoryContext)


    String.prototype.replaceAt = function(index, replacement) {
        return this.substr(0, index) + replacement + this.substr(index + replacement.length);
    }

    useEffect(() => {
        dispatch({type:"HISTORY_PUSH",value:song})
        let title = song.title.split(" ").join("%20").toLowerCase()
        let titleRand = parseInt(Math.random() * title.length)
        let artist = song.artist.name.split(" ").join("%20").toLowerCase()
        let artistRand = parseInt(Math.random() *artist.length)
        artist = artist.replaceAt(artistRand,artist.charAt(artistRand).toUpperCase())
        title = title.replaceAt(titleRand,title.charAt(titleRand).toUpperCase())
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
        <div className="lyric-container">
            {
                isLoading ?(
                    <CircularProgress />

                ):( 
                    <div className="lyric-content">
                        <h2>{song.title} :</h2>
                        <p dangerouslySetInnerHTML={{__html: lyric}}></p>
                    </div>
                )
            }
        </div>
    )
}
