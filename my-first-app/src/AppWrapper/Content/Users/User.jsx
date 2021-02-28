import UserStyle from './User.module.css'
import { NavLink } from 'react-router-dom';
import React from 'react';

class User extends React.Component {
    render() {
        return (
            <NavLink to={`/profile/${this.props.id}`}>
                <div className={UserStyle.div} >
                    <img className={UserStyle.img} src={this.props.img}></img>
                    <div className={UserStyle.name}>{this.props.name}</div>
                </div>
            </NavLink >
        )
    }
}

export default User