import React from 'react'
import { twContext } from '../../helpers/Context'

export function Header(){
    const {posts} = React.useContext(twContext)
    const countOfLike = posts.filter(post => post.like).length
    return <div className=''>
        <span className="h4 mb-1 me-5 ">Nikolay Korolev</span>
        <span className='text-muted float-end'>{posts.length} записи из них понравилось {countOfLike}</span>
    </div>
}