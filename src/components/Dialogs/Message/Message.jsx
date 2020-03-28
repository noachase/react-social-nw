import React from 'react';
import classes from './../Dialogs.module.css';

const Message = (props) => {
    const textElementRef = React.createRef();
    const sendMsg = () => {
        const msg = textElementRef.current.value;
        alert(msg)
    };

    return (
        <div className={classes.message}>

            {/* {props.message} */}
            <div>
                <textarea ref={textElementRef} name="" id="" cols="30" rows="3"></textarea>
            </div>
            <div>
                <button onClick={sendMsg}>Send</button>
            </div>

        </div>
    )
}


export default Message;