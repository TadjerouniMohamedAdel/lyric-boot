import React,{ useState , useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import './Search.css'
import Axios from 'axios';

export default function Search() {
    const [song,setSong] = useState('')
    const [suggests,setSuggests] = useState([])
    const [selectedSong,setSelectedSong]=useState({})

    useEffect(() => {
        console.log(song.split(" ").join("%20"))
        Axios({
            method:'get',
            url:` https://api.lyrics.ovh/suggest/${song}`
        }).then(response=>{
            console.log("suggest",response.data.data)
            setSuggests(response.data.data)
        }).catch(error=>{
            console.log(error)
        })
    }, [song])

    useEffect(() => {
            console.log("select song",selectedSong)
    }, [selectedSong])


    return (
        <div className="search-section">

            <Autocomplete
                className="search-input"
                id="combo-box-demo"
                options={suggests}
                getOptionLabel={(option) => option.title+`  (By ${option.artist.name})`}
                onChange={(e,value)=>setSelectedSong(value)}
                style={{ width: 300 }}
                renderInput={(params) => (
                                <TextField 
                                    {...params} 
                                    value={song}
                                    label="Combo box" 
                                    variant="outlined" 
                                    placeholder="Type the song you want thr lyrics" 
                                    onChange={(e)=>setSong(e.target.value)}
                                />
                                    
                )}
            />
        </div>
    );
}

