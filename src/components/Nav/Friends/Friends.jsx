import React from 'react';
import classes from './Friends.module.css';
import Friend from './Friend/Friend';
// import { NavLink } from 'react-router-dom';


const Friends = (props) => {
    console.log(props)
// debugger;
    let friendsElements = props.state.friends.map(f => <Friend friend={f.name} />)

    return (
        <div>
            <br />

            <div className={classes.friends}>
                Friends
            </div>

            {friendsElements}

        </div>


    )
}

export default Friends;