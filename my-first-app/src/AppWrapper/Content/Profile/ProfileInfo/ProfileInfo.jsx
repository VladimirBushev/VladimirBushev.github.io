import ProfileInfoStyle from './ProfileInfo.module.css'
import React from 'react';

const ProfileInfo = (props) => {
    return (
        <div className={`${ProfileInfoStyle.profileInfo} ${ProfileInfoStyle.div}`}>
            <div className={ProfileInfoStyle.name}>{props.profileInfo.name}</div>
            <div>Дата рождения {props.profileInfo.date}</div>
            <div>Город {props.profileInfo.city}</div>
            <div></div>
        </div>
    )
}

export default ProfileInfo;