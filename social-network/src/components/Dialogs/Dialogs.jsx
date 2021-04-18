import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from '../styles/Dialogs.module.css'
import AddMessageReduxForm from './DialogsForm';

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;

    return (<div className={classes.dialog}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>)
}
const Message = (props) => {
    return (<div className={classes.dialog}>
        {props.message}
    </div>)
}

const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id} />)
    let messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message} />)

    // let onKeyPress = e => {
    //     if (e.key === 'Enter') {
    //         e.preventDefault();
    //         props.addMessage();
    //     }
    // }

    const addNewMessage = (values) => {
        props.addMessage(values.newMessageText);
        console.log(values.newMessageText)
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
            </div>
            <div>
                <AddMessageReduxForm onSubmit={addNewMessage} />
            </div>
        </div>
    )
}

export default Dialogs;