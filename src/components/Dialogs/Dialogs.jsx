import React from 'react';
import s from './Dialogs.module.css'
import MessageItem from './MessageItem/MessageItem';
import DialogItem from './DialogItem/DialogItem'

const Dialogs = (props) => {
    let dialogs = props.dialogs
        .map(el => {
            return <DialogItem name={el.name} id={el.id} />
        })
    let messages = props.messages
        .map(el => {
            return <MessageItem message={el.message} />
        })
    
    let chatBoxElement = React.createRef();

    let addMessage = () => {
        let text = chatBoxElement.current.value;
        alert(text);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogs}
            </div>
            <div className={s.messages}>
                {messages}
                <textarea ref={chatBoxElement}></textarea>
                <div>
                    <button onClick={addMessage}>Send message</button>
                </div>
            </div>

        </div>
    );
}

export default Dialogs