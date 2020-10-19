import React, { createContext,useReducer, useEffect } from 'react'
import { historyReducer } from '../Reducers/historyReducer'



export const HistoryContext = createContext()
export default function HistoryContextProvider(props) {
    const [history, dispatch] = useReducer(historyReducer, [], ()=>{
        const localData = localStorage.getItem('history')
        return localData ? JSON.parse(localData) : []
    })

    useEffect(()=>{
        localStorage.setItem('history',JSON.stringify(history))
    },[history])

    return (
        <HistoryContext.Provider value={{history,dispatch}}>
            {props.children}
        </HistoryContext.Provider>
    )
}
