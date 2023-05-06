import Input from '@mui/joy/Input';
import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import axios from 'axios';
import styles from './SignUp.module.css';
import { API } from '../API/API'

export default function SignUp() {

  const [name, setName] = useState('');
  const [nickName, setNickName] = useState('');
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const [pwdCheck, setpwdCheck] = useState('');
  const [validEmail, setValidEmail] = useState(true);
  const [ableBtn, setAbleBtn] = useState(true);
  const [IsSamePwd, setIsSamePwd] = useState(false);
  const [image, setImage] = useState();

  useEffect(() => {
    const pattern = /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    pattern.test(email) ? setValidEmail(false) : setValidEmail(true);
  }, [email]);

  useEffect(() => {
    setAbleBtn(!((name != '' && email != '' && pwd != '' && pwdCheck != '') && !validEmail && IsSamePwd));
  }, [name, email, IsSamePwd]);

  useEffect(() => {
    pwd === pwdCheck && pwd != '' && pwdCheck != '' ? setIsSamePwd(true) : setIsSamePwd(false);
    console.log(`${API.signUp}`)
  }, [pwd, pwdCheck]);

  const handleSignUpBtn = async() => {
    await axios.post("http://54.180.93.68:8000/app/user/sign-up", {
      name: name,
      nickname: nickName,
      email: email,
      password: pwd,
    }).then(res=>console.log(res)).then((res)=>res.data.isSuccess ? alert('회원가입이 완료되었습니다!') : alert(res.data.message)).then(()=>{setName('');});
  }

return (
  <div className={styles.signUp_wrapper}>
    <h1 className={styles.signUp_title}>Welcome to<span className={styles.signUp_title_logo}> Paw Finder!</span></h1>
    <Input
    className={styles.inputs}
    color="primary"
    disabled={false}
    placeholder="이름"
    size="lg"
    variant="outlined"
    value={name}
    onChange={(e)=>setName(e.target.value)}
    type='text'
    />
    <Input
    className={styles.inputs}
    color="primary"
    disabled={false}
    placeholder="닉네임"
    size="lg"
    variant="outlined"
    value={nickName}
    onChange={(e)=>setNickName(e.target.value)}
    type='text'
    />
    <div className={styles.email_wrap}>
      <Input
      className={styles.inputs}
      color="primary"
      disabled={false}
      placeholder="이메일"
      size="lg"
      variant="outlined"
      value={email}
      onChange={(e)=>setEmail(e.target.value)}
      type='text'
      />
      <div className={styles.errorMessage}>
        {validEmail && email.length > 0 && (
          <div>올바른 이메일 형식을 입력해주세요.</div>
        )}
      </div>
    </div>
    <div className={styles.pwdWrap}>
      <Input
      className={styles.inputs}    
      color="primary"
      disabled={false}
      placeholder="비밀번호"
      size="lg"
      variant="outlined"
      value={pwd}
      onChange={(e)=>setPwd(e.target.value)}
      type='password'
      />
      <Input
      className={styles.inputs}    
      color="primary"
      disabled={false}
      placeholder="비밀번호 확인"
      size="lg"
      variant="outlined"
      value={pwdCheck}
      onChange={(e)=>setpwdCheck(e.target.value)}
      type='password'
      />
      <div className={styles.errorMessage}>
        {!IsSamePwd && pwd.length > 0  && pwdCheck.length > 0 && (
          <div>비밀번호가 다릅니다</div>
        )}
      </div>
    </div>
    <div>{image != null ? image.name : ''}</div>
    {/* <Button variant="contained" component="label" sx={{ m: "16px" }}>
        사진 업로드
        <input hidden accept="image/*" multiple type="file" onChange={handleImgInput}/>
    </Button> */}
    <Stack direction="row" spacing={2} sx={{ mt: 5 }}>
      <Button variant="contained" disabled={ableBtn} onClick={handleSignUpBtn}>동의하고 가입하기</Button>
    </Stack>
  </div>
  )
}
