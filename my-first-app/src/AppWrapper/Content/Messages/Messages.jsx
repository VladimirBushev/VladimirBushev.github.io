import MessagesStyle from './Messages.module.css'
import Dialogs from './Dialogs.jsx'
import Mess from './Mess.jsx'
import MessFooter from './MessFooter.jsx'
import { Route } from 'react-router-dom';
import React from 'react';

const Messages = (props) => {
    return (
        <div className={MessagesStyle.div}>
            <Route exact path='/messages' render={() => <Dialogs dialogs={props.messages.dialogs} changeDialog={props.changeDialog} />} />
            <Route path={`/messages/${props.messages.friend}`} render={() => <Mess dialog={props.messages.dialogs[props.messages.friend]} />} />
            <Route path={`/messages/${props.messages.friend}`} render={() => <MessFooter addMess={props.addMess}
                onMessChange={props.onMessChange} newMessText={props.messages.newMessText} />} />
        </div>

    )
}

export default Messages;