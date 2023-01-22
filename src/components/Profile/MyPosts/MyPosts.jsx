import React from "react";
import classes from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {

    return <div>
        My Post
        <div>
            New Post
        </div>
        <Post message='hello!' like='25'/>
        <Post message='how are you?'/>
        <Post message='whats wrong?'/>
    </div>

}
export default MyPosts