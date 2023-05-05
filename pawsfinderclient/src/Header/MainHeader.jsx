import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import styles from './MainHeader.module.css'

export default function MainHeader() {
  return (
    <div className={styles.header_wrapper}>
        <div className={styles.header_box}>
          <MenuIcon />
          <div>
            회원가입 / 로그인
          </div>
        </div>
    </div>
  )
}
