import React, { useState } from "react";
import './send-post.css'
import { twContext } from "../../helpers/Context";

export function SendPost(){
    const [value, setValue] = useState('')
    const {addPost} = React.useContext(twContext)

    return (
        <form className="bottom-panel d-flex mb-5">
            <input 
                onChange={(e)=>{setValue(e.target.value)}}
                type="text"
                value={value}
                placeholder="О чём вы сейчас думаете"    
                className="form-control new-post-label"
            />
            <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={()=>{if (value !== '') addPost(value)}}
            > Добавить </button>
        </form>
    )
}