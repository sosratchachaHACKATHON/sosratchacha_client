import React, { useState } from 'react'
import Email from './Email'
import Pwd from './Password'
import { Link } from 'react-router-dom'
import styles from './Login.module.css'
import axios from 'axios';
import { withDefaults } from 'vue'

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
            if(res.data.code == 4007){
                alert('로그인 실패. 아이디 비밀번호를 확인해주세요.')
            }
            return res.data.result
        }).then((res)=>localStorage.setItem("token", res));
      }

    return (
    <div>
        <h2 style={{marginLeft: '20px', width: '100vw', textAlign: 'center'}}>로그인</h2>
        <div style={{width: '100vw', display: 'flex', justifyContent: 'center'}}>
            <Email
            email={email}
            handleChangeEmail={handleChangeEmail}
             />
        </div>
        <div style={{width: '100vw', display: 'flex', justifyContent: 'center'}}>
            <Pwd
            pwd={password}
            handleChangePwd={handleChangePwd}/>
        </div>
        <div style={{width: '100vw', display: 'flex', justifyContent: 'center'}} className={styles.login_btn_box}>
            <button className={styles.login_btn} onClick={handleSignUpBtn}>로그인</button>
        </div>
        <div style={{width: '100vw', display: 'flex', justifyContent: 'center'}}>
            <Link to='/signUP'>아직 회원이 아니신가요? 회원가입</Link> 
        </div>
    </div>
  )
}
