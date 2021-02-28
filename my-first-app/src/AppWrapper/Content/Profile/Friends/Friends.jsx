import FriensStyle from './Friends.module.css'
import React, { useDebugValue } from 'react';
import { NavLink } from 'react-router-dom';

const Friends = (props) => {
    debugger
    let friends = []
    for (let friend of props.friends.friends) {
        friends.push(
            <NavLink to={friend.id} >
                <div className={FriensStyle.div}>
                    <img src={friend.img}></img>
                    <div>{friend.name}</div>
                </div>
            </NavLink>
        )
    }
    return (
        <div className={FriensStyle.friends}>
            <a className={FriensStyle.friendsA}>Друзья</a>
            {friends}
        </div>
    )
}

export default Friends;