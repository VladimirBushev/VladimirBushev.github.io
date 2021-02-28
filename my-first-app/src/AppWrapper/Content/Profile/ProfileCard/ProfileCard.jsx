import profileCardStyle from './ProfileCard.module.css'
import React from 'react';

const ProfileCard = (props) => {
    return (
        <div className={`${profileCardStyle.profileCard} ${profileCardStyle.div}`}>
            <div className={profileCardStyle.profileImg}>
                <img className={profileCardStyle.img} src={props.profileCard.img} />
            </div>
            <div>
                <button className={profileCardStyle.button}>Редактировать</button>
            </div>
        </div>
    )
}

export default ProfileCard;