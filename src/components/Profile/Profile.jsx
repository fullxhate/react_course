import React from "react";
import classes from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {

  return  <div className={classes.content}>
        {/*<div>*/}
        {/*    <img src="https://thumbs.dreamstime.com/b/%D0%B0%D0%B1%D1%81%D1%82%D1%80%D0%B0%D0%BA%D1%82%D0%BD%D0%B0%D1%8F-%D0%BA%D0%B2%D0%B0-%D1%80%D0%B0%D1%82%D0%BD%D0%B0%D1%8F-%D1%81%D0%BF%D0%B8%D1%80%D0%B0-%D1%8C%D0%BD%D0%B0%D1%8F-%D1%87%D0%B5%D1%80%D0%BD%D0%BE-%D0%B1%D0%B5-%D0%B0%D1%8F-%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%B0-36825045.jpg" alt=""/>*/}
        {/*</div>*/}
        <div>
            <img
                src="https://s9.travelask.ru/system/images/files/000/336/892/wysiwyg_jpg/10452canada-landscape-map-wallpaper-3.jpg?1502197579"
                alt=""/>
        </div>
        <div>
            avatar + description
        </div>
<MyPosts/>



    </div>
}
export default Profile