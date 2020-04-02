import React from 'react';
import classes from './../Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {

    let path = "/dialogs/" + props.id;

    return (
        <div className={`${classes.dialogs_items} ${classes.active}`}>
            <img className={classes.ava} src={props.ava} alt=""/>
            <NavLink className={classes.dialog_name} to={path}>{props.name}</NavLink>
        </div>
    );
}



export default DialogItem;