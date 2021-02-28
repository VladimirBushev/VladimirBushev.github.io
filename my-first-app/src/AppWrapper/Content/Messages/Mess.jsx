import MessStyle from './Mess.module.css'
import React from 'react';

const Mess = (props) => {
    let messages = []
    messages = props.dialog.messages.map(message => {
        return (
            <div key={message.id} className={message.id === 'my' ? MessStyle.myMes : MessStyle.friendMes}>
                <div className={MessStyle.div}>
                    <img className={MessStyle.img} src={message.id === 'my' ? props.dialog.myImg : props.dialog.img} />
                    <div className={MessStyle.text}>{message.text}</div>
                    <div className={MessStyle.time}>{message.time}</div>
                </div>
            </div>
        )
    })


    let scroll = () => {
        window.scrollTo(0, 99999);
    }
    return (
        <div onLoad={scroll} className={MessStyle.wrapper}>
            <div className={MessStyle.verticalDiv}></div>
            <div className={MessStyle.messages}>
                {messages}
            </div>
        </div>
    )
}

export default Mess;