import './App.css';
import { Routes, Route, Link } from 'react-router-dom'
import MainHeader from './Header/MainHeader';
import Header from './Header/Header';
import Main from './Main/Main';
import BottomNav from './BottomNav/BottomNav';
import LogIn from './Login/LogIn';
import Map from './Map/Map';
import SignUp from './SignUp/SignUp';

function App() {
  return (
    <>
      <Header />
    <Routes>
      <Route path="/detail" element={ <div>상세페이지임</div> } />
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<LogIn />} />
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/map" element={<Map />} />
    </Routes>
      <BottomNav />
    </>
  );
}

export default App;
