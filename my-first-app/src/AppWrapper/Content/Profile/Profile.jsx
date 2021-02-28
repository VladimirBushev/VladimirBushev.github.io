import profileStyle from './Profile.module.css';
import ProfileCard from './ProfileCard/ProfileCard.jsx'
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx'
import Friends from './Friends/Friends.jsx'
import Subscriptions from './Subscriptions/Subscriptions.jsx'
import Photos from './Photos/Photos.jsx'
import Posts from './Posts/Posts';
import React from 'react';
import { Route } from 'react-router-dom';

const Profile = (props) => {
    let users = props.users.map(user => <Route path={`/profile/${user.id}`} render={ () =>
        <div className={profileStyle.profile}>
            <ProfileCard profileCard={user.profileCard}/>
            <ProfileInfo profileInfo={user.profileInfo}/>
            <Friends friends={user.friends}/>
            <Subscriptions subscriptions={user.subscriptions}/>
            <Photos photos={user.photos}/>
            <Posts updateNewPostChange={props.updateNewPostChange}
                publishPost={props.publishPost}
                newPostText={user.posts.newPostText}
                posts={user.posts.posts}
                id={user.id}/>
        </div>} /> )
    return (
        <div>
            {users}
        </div>
    )
}

export default Profile;