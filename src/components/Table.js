import React from 'react'
import { useSelector } from 'react-redux'
import '../App.css'

function Table() {
    const posts = useSelector(state => state.posts)
    console.log(posts)
    let postlist=posts.map(post=><li key={post.id}><h3>{post.title}</h3></li>)
    return (
        <div className="shah1">
            <ul>
            {postlist}      
            </ul>
        </div>
    )
    
}

export default Table
