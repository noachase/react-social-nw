import React from 'react';
import classes from './Nav.module.css';

const Nav = () => {
    return (
        <nav className={classes.nav}>
            <div className={`${classes.item} ${classes.active}`}>Profile</div>
            <div className={classes.item}>Messages</div>
            <div className={classes.item}>News</div>
            <div className={classes.item}>Music</div>
            <br />
            <div className="item"><a href="/#">Settings</a></div>

        </nav>
    )
}

export default Nav;