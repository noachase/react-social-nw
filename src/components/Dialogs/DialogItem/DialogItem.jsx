import React from 'react';
import classes from './../Dialogs.module.css';
import { NavLink } from 'react-router-dom';
import Message from './../Message/Message';

class DialogItem extends React.Component {
    render() {
        let path = "/dialogs/" + this.props.id;

        return (
            <div className={`${classes.dialogs_items} ${classes.active}`}>
                <img className={classes.ava} src={this.props.ava} alt="" />
                <NavLink className={classes.dialog_name} to={path}>{this.props.name}</NavLink>
                <Message />
            </div>
        );
    }
}

export default DialogItem;