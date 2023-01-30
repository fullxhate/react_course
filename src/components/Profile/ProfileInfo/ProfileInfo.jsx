import React from "react";
import classes from './ProfileInfo.module.css'

const ProfileInfo = () => {

    return  <div >
        <div>
            <img
                src="https://cdn.shopify.com/s/files/1/1288/8361/files/nintendo_banner.png?%0A%0A4431485819664452509"
                alt=""/>
        </div>
        <div className={classes.descriptionBlock}>
            avatar + description
        </div>




    </div>
}
export default ProfileInfo