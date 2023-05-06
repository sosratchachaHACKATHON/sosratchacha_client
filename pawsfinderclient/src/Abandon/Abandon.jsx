import React, { useEffect, useState } from 'react'
import styles from './Abandon.module.css'
import AbandonBoard from './AbandonBoard';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Abandon() {
    const navigate = useNavigate();
    const [date, setDate] = useState('');
    const [throwList, setThrowList] = useState([]);
    
    useEffect(() => {
      const myToken = localStorage.getItem("token");
        axios.get(`http://54.180.93.68:8000/app/board?token=${myToken}&boardType=throw`)
        .then(res => {
          setThrowList(res.data.result);
          console.log(res);
        });
    }, []);

    const navToBoard = (id) => {
      navigate(`/abandon/${id}`);
    }
  
  return (
    <div style={{marginBottom: '120px'}}>
        <div className={styles.abandon_top} style={{ display: 'flex', alignItems: 'center' }}>
            <label style={{marginRight: '16px'}}>날짜</label>
            <input 
            className={styles.abandon_input}
            type='date'
            value={date}
            onChange={(e)=>setDate(e.target.value)}
            />
        </div>
            {throwList && throwList.map((item, idx) => {
              return (
                <div onClick={()=>navToBoard(item.id)} key={idx} style={{margin: '30px 70px'}}>
                <AbandonBoard
                boardType={item.boardType}
                content={item.content}
                id={item.id}
                locationName={item.locationName}
                type={item.type}
                url={item.url}
                lat={item.xcoord}
                lng={item.ycoord}
                />
                </div>
              );
            })}
    </div>
  )
}
