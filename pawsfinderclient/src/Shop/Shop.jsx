import React, { useEffect, useState } from 'react'
import styles from './Shop.module.css'
import axios from "axios";

export default function Shop() {
  
    const [itemsList, setItemsList] = useState();

    useEffect(() => {
        const myToken = localStorage.getItem("token");
            axios.get(`http://54.180.93.68:8000/app/item?token=${myToken}&itemType=의류`)
            .then(res => {
            setItemsList(res.data.result);
            console.log(res);
        });
    }, []);
  
  return (
    <div style={{marginBottom: '120px'}}>
        {itemsList && itemsList.map((item, idx) => {
            return (
                <div className={styles.item_wrapper} key={idx} >
                <div style={{fontSize: '18px', fontWeight: '700', color: '#888', marginBottom: '16px'}}>{item.content}</div>
                <div>
                    <img 
                    src={item.picUrl} 
                    alt='아이템 이미지'
                    style={{width: '250px', height: '250px'}}
                    />
                </div>
                </div>
            )
        })}
    </div>
  )
}
