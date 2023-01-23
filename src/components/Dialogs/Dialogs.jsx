import React from "react";
import classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return <div className={classes.dialog + ' ' + classes.active}>
        <NavLink to={"/dialogs/" + props.id}>
            {props.name}
        </NavLink>
    </div>
}
const Message = (props) => {
    return <div className={classes.dialog}>
        {props.message}
    </div>
}

const Dialogs = (props) => {
    return <div className={classes.dialogs}>
        <div className={classes.dialogsItems}>
            <DialogItem name="Andrew" id="1"/>
            <DialogItem name="Kriss" id="2"/>
            <DialogItem name="Alex" id="3"/>
            <DialogItem name="Sergey" id="4"/>
            <DialogItem name="Anna" id="5"/>
            <DialogItem name="Vasilii" id="6"/>
        </div>
        <div className={classes.messages}>
            <Message message="Hi!"/>
            <Message message="Hello!"/>
            <Message message="Salamaliqkum"/>
            <Message message="Hi!"/>
            <Message message="Hello!"/>
            <Message message="Salamaliqkum"/>

        </div>


    </div>
}
export default Dialogs;

