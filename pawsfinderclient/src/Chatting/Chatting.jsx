import React, { useEffect, useState } from 'react'
import axios from 'axios'
import MyChatting from './MyChatting';
import OthersChatting from './OthersChatting';
import SendIcon from '@mui/icons-material/Send';
import styles from './Chatting.module.css'

export default function Chatting() {
  
    const [messageList, setMessageList] = useState();
    const [myNick, setMyNick] = useState('');
    const [commentInput, setCommentInput] = useState('');

    useEffect(() => {
        const myToken = localStorage.getItem("token");
            axios.get(`http://54.180.93.68:8000/app/chatting?token=${myToken}`)
            .then(res => {
            setMessageList(res.data.result.chattingList.reverse());
            setMyNick(res.data.result.myNickname);
        });
    }, [commentInput]);

    const handleCommentInput = () => {
        const myToken = localStorage.getItem("token");
        axios.post(`http://54.180.93.68:8000/app/chatting?token=${myToken}`, {
            message: commentInput
        }).then(res =>{
            console.log(res.data);
            setCommentInput('');
        });
    }
  
  return (
    <div>
        {messageList && messageList.map((item, idx) => {
            return(
            item.nickname == myNick ? 
            <div style={{ padding: '10px 25px', textAlign: 'right'}} key={idx}>
            <MyChatting key={idx} 
            content={item.content}
            createdAt={item.createdAt}/>
            </div> : 
            <div style={{ padding: '6px 25px'}} key={idx}>
            <OthersChatting key={idx} 
            content={item.content}
            nickName={item.nickname}
            createdAt={item.createdAt}/>
            </div>
            );
        })}
        <div className={styles.input_wrapper}>
        <input 
        className={styles.comment_input}
        placeholder='댓글입력'
        value={commentInput}
        onChange={(e)=>setCommentInput(e.target.value)}
        />
        <button className={styles.send_button} onClick={handleCommentInput}>
            <SendIcon />
        </button>
        </div>
    </div>
  )
}
