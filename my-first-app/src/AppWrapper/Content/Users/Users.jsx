import User from './User'
import React from 'react';

const Users = (props) => {
    let usersList = []
    props.users.users.map(user => usersList.push(<User name={user.name} img={user.img} id={user.id}/>))
    return (
        <div>{usersList}</div>
    )
}

export default Users