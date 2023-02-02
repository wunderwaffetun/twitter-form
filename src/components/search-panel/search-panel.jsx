import React, { useState, useEffect } from "react";
import { twContext } from '../../helpers/Context'


export function SearchPanel(){
    const [value, setValue] = useState('')

    const {searchPosts, searcherIsEmpty} = React.useContext( twContext )

    const searchHandler = (e) => {
        setValue(e.target.value)
    }

    useEffect(() => {
        searchPosts(value)
        searcherIsEmpty(value === '')
        //eslint-disable-next-line
    }, [value])

    return <input
            type="text"
            placeholder="Поиск по записям" 
            className="form-control"
            onChange={(e) => {searchHandler(e)}}
            value={value}
        />
        
}