import React, { useEffect, useState } from 'react'

import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styles from './Missing.module.css'
import AbandonBoard from '../Abandon/AbandonBoard';

export default function Missing() {
    const navigate = useNavigate();
    const [date, setDate] = useState('');
    const [token, setToken] = useState('');
    const [throwList, setThrowList] = useState([]);
    
    useEffect(() => {
      const myToken = localStorage.getItem("token");
      axios.get(`http://54.180.93.68:8000/app/board?token=${myToken}&boardType=lost`)
      .then(res => {
        setThrowList(res.data.result);
        console.log(res.data.result);
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
