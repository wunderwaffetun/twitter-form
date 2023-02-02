import React from "react";
import { PostListItem } from '../post-list-item'
import { twContext } from '../../helpers/Context'

export function PostList(){
    const { visiblePosts } = React.useContext( twContext )

    return <div className="post-list">
        {visiblePosts.map(post => <PostListItem key={post.id} post={post} />)}
    </div>
}