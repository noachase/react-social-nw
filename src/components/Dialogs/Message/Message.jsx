import React from 'react';
import classes from './../Dialogs.module.css';

const Message = (props) => {
    // debugger
    const messageElementRef = React.createRef();

    const sendMsg = () => {
        const msg = messageElementRef.current.value;
        alert(msg)
    };

    let onMessageChange = () => {
        const msg = messageElementRef.current.value;
        // props.updateNewMsgText(msg);
        console.log(props.newDialogMsg);
        console.log(msg);
    }

    return (
        <div className={classes.message}>

            {/* {props.message} */}
            <div>
                <textarea onChange={onMessageChange} ref={messageElementRef} value={props.newDialogMsg}></textarea>
            </div>
            <div className={classes.btnContainer}>
                <button className={classes.btnSend} onClick={sendMsg}>Send</button>
            </div>

        </div>
    )
}


export default Message;