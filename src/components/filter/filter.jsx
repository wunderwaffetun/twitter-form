import React, { useState } from "react";
import { twContext } from '../../helpers/Context'

export function Filter(){
    const { includeLikesOnly, allButtonIsInclude } = React.useContext( twContext )
    const [filterIs, setFilterIs] = useState(true)

    const filterHandler = () => {
        includeLikesOnly(filterIs)
        allButtonIsInclude(!filterIs)
    }

    return (
        <ul className="btn-group m-0 ms-1" role="group" >
            <button 
                type="button" 
                className={`btn btn-outline-primary ${!filterIs ? null: ' active'}`}
                onClick={()=>{setFilterIs(!filterIs); filterHandler()}}
                >Все</button>
            <button 
                type="button" 
                className={`btn btn-outline-primary ${filterIs ? null: ' active'}`}
                onClick={()=>{setFilterIs(!filterIs); filterHandler()}}
                >Понравилось</button>
        </ul>
    )
}