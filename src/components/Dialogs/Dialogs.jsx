import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { updateNewMessageBodyCreator, sendMessageCreator } from '../../redux/state';


const Dialogs = (props) => {
    // debugger
    let state = props.store.getState().dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} ava={d.ava} />);
    let messagesElements = state.messages.map(m => <Message message={m.message} />);
    let newMessageBody = state.newMessageBody;


    const onSendMessageClick = () => {
        // console.log(newMessageBody);
        props.store.dispatch(sendMessageCreator());
    }

    const onNewMessageChange = (e) => {
        let body = e.target.value;
        // console.log(body);
        props.store.dispatch(updateNewMessageBodyCreator(body));
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogs_items}>
                {dialogsElements}
            </div>
            <div className={classes.message}>
                <div>{messagesElements}</div>
                <div>
                    <div>
                        <textarea
                            value={newMessageBody}
                            onChange={onNewMessageChange}
                            placeholder='Enter your message'>
                        </textarea>
                    </div>
                    <div>
                        <button
                            className={classes.btnSend}
                            onClick={onSendMessageClick}>
                            Send
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Dialogs;