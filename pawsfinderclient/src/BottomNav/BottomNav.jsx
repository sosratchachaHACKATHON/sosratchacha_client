import React from 'react'
import styles from './BottomNav.module.css'
import { useNavigate } from 'react-router-dom'

export default function BottomNav() {
  
    const navigate = useNavigate();
    const handleClickNav = (e) => {
        const category = e.target.innerText;
        console.log(category);
        if (category == '유기') navigate('/abandon');
        else if (category == '지도') navigate('/map');
        else navigate('/missing');
    }
  return (
    <div>
        <div className={styles.bottom_nav_wrapper}>
          <h3 className={styles.bottom_nav_content} onClick={(e)=>handleClickNav(e)}>유기</h3>
          <h3 className={styles.bottom_nav_content} onClick={(e)=>handleClickNav(e)}>지도</h3>
          <h3 className={styles.bottom_nav_content} onClick={(e)=>handleClickNav(e)}>미아</h3>
        </div>
    </div>
  )
}
