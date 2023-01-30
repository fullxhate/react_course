import React from "react";
import classes from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    let posts = [
        {id: 1, message: 'hello!', like: 25},
        {id: 2, message: 'how are you?', like: 3},
        {id: 3, message: 'whats wrong?', like: 0},
    ]
    let postsElements = posts.map( post => <Post message={posts[0].message} like={posts[0].like}/> )

    return <div className={classes.postsBlock}>
        <h3>My Post </h3>
        <div>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button> ADD POST</button>
            </div>

        </div>
        <div className={classes.posts}>
            {postsElements}
        </div>

    </div>

}
export default MyPosts