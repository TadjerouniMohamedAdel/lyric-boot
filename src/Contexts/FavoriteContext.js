import React,{ createContext,useState,useReducer, useEffect } from 'react'
import { favoriteReducer } from '../Reducers/favoriteReducer'


export const FavoriteContext = createContext()


export default function FavoriteContextProvider(props) {
    
    const [favorites, dispatch] = useReducer(favoriteReducer,[],()=>{
        const localData = localStorage.getItem("favorites")
        return localData ? JSON.parse(localData) : []
    })

    useEffect(()=>{
        localStorage.setItem("favorites",JSON.stringify(favorites))
    },[favorites])
   
    return (
        <FavoriteContext.Provider value={{favorites,dispatch}}>
            {props.children}
        </FavoriteContext.Provider>
    )
}
