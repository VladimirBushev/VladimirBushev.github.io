import News from './News/News.jsx';
import { Route } from 'react-router-dom';
import ContentStyle from './Content.module.css';
import MessagesContainer from './Messages/MessagesContainer';
import React from 'react';
import UsersContainer from './Users/UsersContainer';
import Profile from './Profile/Profile'

const Content = (props) => {
    return (
        <div className={ContentStyle.content}>
            <Route path='/profile' render={ () => <Profile users={props.users}
            updateNewPostChange={props.updateNewPostChange}
            publishPost={props.publishPost}/>} />
            <Route path='/news' render={() => <News />} />
            <Route path='/messages' render={ () => <MessagesContainer />}/>
            <Route exact path='/users' render={ () => <UsersContainer />}/>
        </div>
    )
}

export default Content;