import React from 'react';
import styles from './users.module.css';
import * as axios from 'axios';
import userPhoto from '../../assets/images/user.jpg';
import Loader from '../../Loader/Loader'

class Users extends React.Component {

    constructor (props) {
        super(props);  

        axios
            .get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                this.props.setUsers(response.data.items)
            });
        
    }


    render () {
        return <div>
        {/* <button onClick={this.getUsers}>Get Users</button> */}
        {
            this.props.users.map(u => <div key={u.id} className={styles.userWrapper}>
                <div >
                    <div>
                        <img src={u.photos.small !== null ? u.photos.small : userPhoto} className={styles.userPhoto} alt="" />

                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => { this.props.unfollow(u.id) }} className={styles.btnFollow}>Unfollow</button>
                            : <button onClick={() => { this.props.follow(u.id) }} className={styles.btnUnfollow}>Follow</button>}

                    </div>
                </div>
                <div className={styles.userInfo}>
                    <div className={styles.userName}>{u.name}</div>
                    <div>{u.status}</div>
                    <div>{'u.location.country'}</div>
                    <div>{'u.location.city'}</div>
                </div>
            </div>)

        }

    </div>
    }
}

export default Users;