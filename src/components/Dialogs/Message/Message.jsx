import React from 'react';
// import classes from './../Dialogs.module.css';

const Message = (props) => {
    // debugger
    // const messageElementRef = React.createRef();

    // const sendMsg = () => {
    //     const msg = messageElementRef.current.value;
    //     alert(msg)
    // };

    // let onMessageChange = () => {
    //     const msg = messageElementRef.current.value;
    //     // props.updateNewMsgText(msg);
    //     console.log(props.newDialogMsg);
    //     console.log(msg);
    // }

    return (
        <div>

            {props.message}
            <div value={props.newDialogMsg}>
                
            </div>
            

        </div>
    )
}


export default Message;