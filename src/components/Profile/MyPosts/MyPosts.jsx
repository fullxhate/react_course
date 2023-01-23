import React from "react";
import classes from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {

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
            <Post message='hello!' like='25'/>
            <Post message='how are you?' like='0'/>
            <Post message='whats wrong?' like='3'/>
        </div>

    </div>

}
export default MyPosts