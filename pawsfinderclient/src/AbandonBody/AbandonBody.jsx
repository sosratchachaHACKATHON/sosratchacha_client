import React, { useEffect, useState } from 'react'
import MapModal from '../MapModal/MapModal';
import { useParams } from 'react-router-dom';
import axios from 'axios'
import SendIcon from '@mui/icons-material/Send';
import styles from './AbandonBody.module.css'

export default function AbandonBody () {
  
  const { id } = useParams();
  const [bodyResult, setBodyResult] = useState();
  const [commentInput, setCommentInput] = useState('');

  useEffect(() => {
    axios.get(`http://54.180.93.68:8000/app/board/${id}`).then((res)=> {
      console.log(res.data.result);
      setBodyResult(res.data.result);
    })
  }, [commentInput]);

  const handleCommentInput = () => {
    const myToken = localStorage.getItem("token");
    axios.post(`http://54.180.93.68:8000/app/board/${id}/comment?token=${myToken}`, {
      content: commentInput
    }).then(res =>{
      console.log(res.data);
      setCommentInput('');
    });
  }

  return (
<div className={`${styles.body_wrapper} ${styles.custom_body}`}>
  {bodyResult && 
  <div>
    <div className={styles.centered}>
      <img className={styles.image} src={bodyResult.picURL[0].url}/>
    </div>
    <div>
      <h3 className={styles.title}>{bodyResult.content[0].boardContent}</h3>
      <h3 className={styles.location}>{bodyResult.content[0].locationName}</h3>
    </div>
    <MapModal
      lat={bodyResult.content[0].xCoord}
      lng={bodyResult.content[0].yCoord}/>
    <div style={{display: 'flex', marginTop: '15px'}}>
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
    <div className={styles.comment_section}>
      {bodyResult.comments && bodyResult.comments.map((item, idx) => {
        return (
          <div key={idx} className={styles.comment_item}>{item.writerNickname} : {item.comment}</div>
        )
      })}
    </div>
  </div>
  }
</div>
  )
}
