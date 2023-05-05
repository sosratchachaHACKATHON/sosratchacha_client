import React, { useState } from 'react'
import Email from './Email'
import Pwd from './Password'
import { Link } from 'react-router-dom'
import styles from './Login.module.css'

export default function LogIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
        console.log(e.target.value);
    }

    const handleChangePwd = (e) => {
        setPassword(e.target.value);
        console.log(e.target.value);
    }
  
    return (
    <div>
        <h2 style={{marginLeft: '20px'}}>로그인</h2>
        <form action='post할 URL' name='user_info' method='post'>
        <div>
            <Email
            email={email}
            handleChangeEmail={handleChangeEmail}
             />
        </div>
        <div>
            <Pwd
            pwd={password}
            handleChangePwd={handleChangePwd}/>
        </div>
        <div className={styles.login_btn_box}>
        <button className={styles.login_btn}>로그인</button>
        </div>
        </form>
            <Link to='/signUP'>아직 회원이 아니신가요? 회원가입</Link> 
    </div>
  )
}
