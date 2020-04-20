import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { updateNewMessageBodyCreator, sendMessageCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';


const DialogsContainer = (props) => {
    // debugger
    let state = props.store.getState().dialogsPage;

    // let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} ava={d.ava} />);
    // let messagesElements = state.messages.map(m => <Message message={m.message} />);
    // let newMessageBody = state.newMessageBody;


    const onSendMessageClick = () => {
        // console.log(newMessageBody);
        props.store.dispatch(sendMessageCreator());
    }

    const onNewMessageChange = (body) => {
        // console.log(body);
        props.store.dispatch(updateNewMessageBodyCreator(body));
    }

    return (
        <Dialogs 
            updateNewMessageBody={onNewMessageChange} 
            sendMessage={onSendMessageClick}
            dialogsPage={state}
        />
    )
}

export default DialogsContainer;