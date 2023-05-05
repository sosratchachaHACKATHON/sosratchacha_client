import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function MenuBar() {
  const [open, setOpen] = React.useState(false);

  const handleMenuClick = () => {
    setOpen(!open);
  };

  return (
    <div>
      <AppBar position="sticky" sx={{ bgcolor: '#ddd' }}>
          <IconButton
            size="large"
            edge="middle"
            color="inherit"
            aria-label="menu"
            onClick={handleMenuClick} // 클릭 이벤트 처리
          >
            <MenuIcon sx={{ borderRadius: '6px' }} />
          </IconButton>
      </AppBar>
      {/* 요소들 */}
      {open && (
        <Box sx={{ p: 2, bgcolor: 'background.paper', position: 'absolute', width: "100px", right: '0px', height: '100vh', backgroundColor: '#ddd'}}>
          <Typography>로그인</Typography>
          <Typography>관심 동물</Typography>
          <Typography>실시간 채팅</Typography>
        </Box>
      )}
    </div>
  );
}