import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux"
import { changeState } from '../store';

export default function MenuBar() {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleMenuClick = () => {
    setOpen(!open);
  };

  const dispatch = useDispatch();
  let isLoggedIn = useSelector((state) => state.loggedIn)

  return (
    <div style={{zIndex: '100'}}>
      <AppBar position="sticky" sx={{ bgcolor: '#ddd' }}>
          <IconButton
            size="large"
            color="inherit"
            aria-label="menu"
            onClick={handleMenuClick} // 클릭 이벤트 처리
          >
            <MenuIcon sx={{ borderRadius: '6px' }} />
          </IconButton>
      </AppBar>
      {/* 요소들 */}
      {open && (
        <Box sx={{ p: 2, bgcolor: 'background.paper', position: 'absolute', width: "100px", right: '0px', height: '110px', backgroundColor: '#ddd'}}>
          {isLoggedIn ? 
          <>
          <Typography onClick={()=>{navigate('/'); setOpen(false); dispatch(changeState());}} sx={{ fontSize: '18px', fontWeight: '700', textAlign: 'center', "&:hover": { bgColor: '#fff'}}}>로그아웃</Typography>
          <Typography onClick={()=>{navigate('/shop'); setOpen(false);}} sx={{ fontSize: '18px', fontWeight: '700', textAlign: 'center', mt: '15px'}}>강아지 용품</Typography>
          <Typography onClick={()=>{navigate('/chatting'); setOpen(false);}} sx={{ fontSize: '18px', fontWeight: '700', textAlign: 'center', mt: '15px'}}>실시간 채팅</Typography>
          </> : 
          <>
          <Typography onClick={()=>{navigate('/login'); setOpen(false);}} sx={{ fontSize: '18px', fontWeight: '700', textAlign: 'center', "&:hover": { bgColor: '#fff'}}}>로그인</Typography>
          <Typography onClick={()=>{navigate('/signUp'); setOpen(false);}} sx={{ fontSize: '18px', fontWeight: '700', textAlign: 'center', mt: '15px'}}>회원가입</Typography>
          <Typography onClick={()=>{navigate('/shop'); setOpen(false);}} sx={{ fontSize: '18px', fontWeight: '700', textAlign: 'center', mt: '15px'}}>강아지 용품</Typography>
          </>}
        </Box>
      )}
    </div>
  );
}