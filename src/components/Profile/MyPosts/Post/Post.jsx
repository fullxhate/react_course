import React from "react";
import classes from './Post.module.css'

const Post = (props) => {

  return <div className={classes.item}>
      <img src="https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg" alt=""/>
      {/*{ props.message }*/}
      {/*{ props.name }*/}

      <div>
          <span>like</span> {props.like}
      </div>



            </div>
}
export default Post