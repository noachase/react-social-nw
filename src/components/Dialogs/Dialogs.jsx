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

    let dialogsData = [
        { id: '1', name: 'Dimich' },
        { id: '2', name: 'Vanya' },
        { id: '3', name: 'Bodya' },
        { id: '4', name: 'Vladik' },
        { id: '5', name: 'Serega' },
        { id: '6', name: 'Olya' }
    ]

    let messagesData = [
        { id: '1', message: 'Dimich molodec' },
        { id: '2', message: 'Vanya molodec' },
        { id: '3', message: 'Bodya molodec' },
        { id: '4', message: 'Vladik molodec' },
        { id: '5', message: 'Serega molodec' },
        { id: '6', message: 'Olya molodec' }
    ]



    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogs_items}>

                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
                <DialogItem name={dialogsData[4].name} id={dialogsData[4].id} />
                <DialogItem name={dialogsData[5].name} id={dialogsData[5].id} />


            </div>
            <div className={classes.messages}>
                <Message message={messagesData[0].message} id={messagesData[0].id} />
                <Message message='lorem ipsum dolor hi' />
                <Message message='lorem ipsum dolor sup' />
            </div>
        </div>
    )
}

export default Dialogs;