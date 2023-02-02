import React from 'react'

import { Header } from '../header'
import { SearchPanel } from '../search-panel/'
import { Filter } from '../filter/'
import { PostList } from '../post-list/'
import { SendPost } from '../send-post'


export default function App(){

    return <div className='container mt-5'>
                <Header />
                <div className='d-flex my-3'>
                    <SearchPanel />
                    <Filter />
                </div>
                <PostList />
                <SendPost />
           </div>
}