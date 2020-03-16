import React from 'react';
import classes from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {

    let path = "/dialogs/" + props.id;

    return (
        <div className={`${classes.dialog} ${classes.active}`}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}

const Message = (props) => {
    return (
        <div className={classes.message}>{props.message}</div>
    )
}

const Dialogs = (props) => {

    let dialogs = [
        { id: 1, name: 'Dimich' },
        { id: 2, name: 'Vanya' },
        { id: 3, name: 'Bodya' },
        { id: 4, name: 'Vladik' },
        { id: 5, name: 'Serega' },
        { id: 6, name: 'Olya' }
    ]
    
    let messages = [
        { id: 1, message: 'Dimich molodec' },
        { id: 2, message: 'Vanya molodec' },
        { id: 3, message: 'Bodya molodec' },
        { id: 4, message: 'Vladik molodec' },
        { id: 5, message: 'Serega molodec' },
        { id: 6, message: 'Olya molodec' }
    ]
    
    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
    let messagesElements = messages.map(m => <Message message={m.message} />)

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogs_items}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;