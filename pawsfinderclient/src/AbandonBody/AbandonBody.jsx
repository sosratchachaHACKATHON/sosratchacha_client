import React, { useEffect, useState } from 'react'
import MapModal from '../MapModal/MapModal';
import { useParams } from 'react-router-dom';
import axios from 'axios'
import SendIcon from '@mui/icons-material/Send';

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
    <div>
        <div>
            {bodyResult && 
            <div>
              <div>
                <img src={bodyResult.picURL[0].url} style={{width: '250px', height: '250px'}}/>
              </div>
              <div>
                <h3>제목 : {bodyResult.content[0].boardContent}</h3>
                <h3>{bodyResult.content[0].createdAt}</h3>
                <h3>{bodyResult.content[0].locationName}</h3>
              </div>
              <MapModal
              lat={bodyResult.content[0].xCoord}
              lng={bodyResult.content[0].yCoord}/>
              <div>
                <input 
                placeholder='댓글입력'
                value={commentInput}
                onChange={(e)=>setCommentInput(e.target.value)}
                />
                <button onClick={handleCommentInput}>
                  <SendIcon />
                </button>
              </div>
              <div>
                {bodyResult.comments && bodyResult.comments.map((item, idx) => {
                  return (
                    <div key={idx}>{item.writerNickname} : {item.comment}</div>
                  )
                })}
              </div>

            </div>
            }
        </div>
        <div>
            
        </div>

    </div>
  )
}
