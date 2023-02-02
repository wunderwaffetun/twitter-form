import React, { useReducer } from "react";
import { reducer } from "./Reducer";

export const twContext = React.createContext()

const initialPosts = [
    {text: "React", important:  false, like: false,  id: Math.random()},
    {text: "Js", important: false, like: false, id: Math.random()},
    {text: "TypeScript", important:  false, like: false, id: Math.random()},
]

export function ContextWrapper({children}){
    const [state, dispatch] = useReducer( reducer, {visiblePosts: initialPosts, posts: initialPosts, searcher: false, allButton: true})

    state.deletePost = (id) => {
        dispatch({type: 'DEL', params: {id}})
    }

    state.addFavourits = (id) => {
        dispatch({type: 'FAV', params: {id}})
    }

    state.likePost = (id) => {
        dispatch({type: 'LIK', params: {id}})
    }

    state.addPost = (textOfNewPost) => {
        dispatch({type: 'ADD', params: {textOfNewPost}})
    }

    state.searchPosts = (text) => {
        dispatch({type: 'SRH', params: {text}})
    }

    state.includeLikesOnly = (filterIs) => {
        dispatch({type: 'INC', params: {filterIs}})
    }

    state.searcherIsEmpty = (line) => {
        dispatch({type: 'ReS', params: {line}})
    }    

    state.allButtonIsInclude = (bool) =>{
        dispatch({type: 'ReL', params: {bool}})
    } 


    const value = {...state}
    return <twContext.Provider value={value}>
        {children}
    </twContext.Provider>

}
