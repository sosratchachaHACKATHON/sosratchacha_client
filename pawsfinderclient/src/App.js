import './App.css';
import { Routes, Route, Link } from 'react-router-dom'
import MainHeader from './Header/MainHeader';
import Header from './Header/Header';
import Main from './Main/Main';
import BottomNav from './BottomNav/BottomNav';
import LogIn from './Login/LogIn';
import Map from './Map/Map';
import SignUp from './SignUp/SignUp';
import Abandon from './Abandon/Abandon';
import AbandonBody from './AbandonBody/AbandonBody';
import Missing from './Missing/Missing';
import SnackbarProvider from './SnackBarProvider';
import Shop from './Shop/Shop';

function App() {
  return (
    <>
    <SnackbarProvider>
      <Header />
        <Routes>
          <Route path="/detail" element={ <div>상세페이지임</div> } />
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/abandon" element={<Abandon />} />
          <Route path="/abandon/:id" element={<AbandonBody />} />
          <Route path="/missing" element={<Missing />} />
          <Route path="/abandon:id" element={<AbandonBody />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/map" element={<Map />} />
        </Routes>
      <BottomNav />
    </SnackbarProvider>
    </>
  );
}

export default App;
