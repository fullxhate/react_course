import React from "react";
import classes from './ProfileInfo.module.css'

const ProfileInfo = () => {

    return  <div >
        <div>
            <img
                src="https://s9.travelask.ru/system/images/files/000/336/892/wysiwyg_jpg/10452canada-landscape-map-wallpaper-3.jpg?1502197579"
                alt=""/>
        </div>
        <div className={classes.descriptionblock}>
            avatar + description
        </div>




    </div>
}
export default ProfileInfo