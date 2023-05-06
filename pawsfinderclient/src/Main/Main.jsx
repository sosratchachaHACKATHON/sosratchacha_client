import React from 'react'
import styles from './Main.module.css'
import { Navigate, useNavigate } from 'react-router-dom'
import { useSelector } from "react-redux"

export default function Main() {
  
    const navigate = useNavigate();
   
    const navToLogIn = () => {
        navigate('/login');
    }

    let isLoggedIn = useSelector((state) => state.loggedIn)
  return (
    <div>
        <div>
          <h2 className={styles.main_title} style={{marginTop: '90px'}}>Paws Finder</h2>
        </div>
        <div style={{ textAlign: 'center' }}>
          <img src='https://post-phinf.pstatic.net/MjAyMTAxMTVfMjY4/MDAxNjEwNjkzMjg5OTQ2.VhFj39azgzzutXU4112LQmrcp0f6vFcgjhTx2QFQd-4g.j-ywOhCQeEtOVeIptIYcIAEgatbE8cn2-Hny1Rv5EMkg.PNG/%EA%B0%95%EC%95%84%EC%A7%80_c.png?type=w1200'
          alt='메인 아이콘'
          style={{width: '170px', height: '170px', marginTop: '30px'}}
           />
        </div>
        <div style={{textAlign: 'center', marginTop: '60px'}}>
            {isLoggedIn ?  
            <></> : 
            <button className={styles.main_login} onClick={navToLogIn}>
                로그인하러 가기!
            </button>}
        </div>
    </div>
  )
}
