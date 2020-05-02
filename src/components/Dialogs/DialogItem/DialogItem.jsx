import React from 'react';
import classes from './../Dialogs.module.css';
import { NavLink } from 'react-router-dom';
import Message from './../Message/Message';

const DialogItem = (props) => {

    let path = "/dialogs/" + props.id;

    return (
        <div className={`${classes.dialogs_items} ${classes.active}`}>
            <img className={classes.ava} src={props.ava} alt=""/>
            <NavLink className={classes.dialog_name} to={path}>{props.name}</NavLink>
            <Message/>
        </div>
    );
}



export default DialogItem;