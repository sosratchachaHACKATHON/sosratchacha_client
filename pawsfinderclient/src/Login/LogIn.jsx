import React, { useState } from 'react'
import Email from './Email'
import Pwd from './Password'
import { Link } from 'react-router-dom'
import styles from './Login.module.css'
import axios from 'axios';

export default function LogIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    }

    const handleChangePwd = (e) => {
        setPassword(e.target.value);
    }

    const handleSignUpBtn = async() => {
        await axios.post("http://54.180.93.68:8000/app/user/login", {
          email: email,
          password: password,
        }).then(res=>{
            console.log(res.data.result);
            return res.data.result
        }).then((res)=>localStorage.setItem("token", res));
      }
  
    return (
    <div>
        <h2 style={{marginLeft: '20px'}}>로그인</h2>
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
        <button className={styles.login_btn} onClick={handleSignUpBtn}>로그인</button>
        </div>
            <Link to='/signUP'>아직 회원이 아니신가요? 회원가입</Link> 
    </div>
  )
}
