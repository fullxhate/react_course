import React from "react";
import classes from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    let dialogs = [
        {id: 1, name: 'Andrew'},
        {id: 2, name: 'Kriss'},
        {id: 3, name: 'Alex'},
        {id: 4, name: 'Sergey'},
        {id: 5, name: 'Anna'},
        {id: 6, name: 'Vasilii'},
    ]
    let messages = [
        {id: 1, message: 'Hi!'},
        {id: 2, message: 'Hello!'},
        {id: 3, message: 'Salamaliqkum'},
        {id: 4, message: 'Hi!'},
        {id: 5, message: 'Hello!'},
        {id: 6, message: 'Salamaliqkum'},

    ]

    let dialogsElements = dialogs
        .map( dialog => <DialogItem name={dialog.name} id={dialog.id} /> );


    let messagesElements = messages.map( message => <Message message={message.message} />);

    return <div className={classes.dialogs}>
        <div className={classes.dialogsItems}>
            {dialogsElements}
        </div>
        <div className={classes.messages}>
            {messagesElements}
        </div>


    </div>

}
export default Dialogs;

