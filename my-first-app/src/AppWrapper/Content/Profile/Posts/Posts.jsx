import PostsStyle from './Posts.module.css'
import Post from './Post.jsx'
import React from 'react';

const Posts = (props) => {
    debugger
    let onPostChange = (e) => {
        let text = e.target.value
        props.updateNewPostChange(text, props.id)
    }
    let publishPost = () => {
        props.publishPost(props.id)  
    }
    let posts = []
    for (let post of props.posts) {
        posts.push(<Post img={post.img} text={post.text} />)
    }
    return (
        <div className={PostsStyle.posts}>
            <div className={PostsStyle.header}>
                <input value={props.newPostText} type='text' placeholder="Что у вас нового?" onChange={onPostChange} className={PostsStyle.input}></input>
                <button onClick={publishPost}>Опубликовать</button>
            </div>
            {posts}
        </div>
    )
}

export default Posts;