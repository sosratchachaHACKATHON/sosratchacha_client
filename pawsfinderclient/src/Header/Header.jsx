import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import styles from './Header.module.css';
import { useNavigate } from 'react-router-dom';
import MenuBar from './MenuBar';

export default function Header() {
  const navigate = useNavigate();
  const handleBackBtn = () => {
    navigate(-1);
  }
  const navToHome = () => {
    navigate('/');
  }
  
  return (
    <div>
        <div className={styles.header_wrapper}>
            <div>
                <ArrowBackIcon onClick={handleBackBtn} />
            </div>
          <div>
            <h2 onClick={navToHome}>Paws Finder</h2>
          </div>
          {/* <MenuIcon /> */}
          <MenuBar />
        </div>
    </div>
  )
}
