import MessFooterStyle from './MessFooter.module.css'
import React from 'react';

const MessFooter = (props) => {
    let addMess = () => {
        props.addMess()
    }

    let onMessChange = (e) => {
        let text = e.target.value
        props.onMessChange(text)
    }
    
    return(
        <div className={MessFooterStyle.footer}>
            <input onChange={onMessChange} type="text" value={props.newMessText}/>
            <button onClick={addMess}>Отправить</button>
        </div>
    )
}

export default MessFooter