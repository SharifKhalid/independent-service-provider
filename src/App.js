import { Route, Routes } from 'react-router-dom';
import './App.css';
import AboutMe from './Components/Header/AboutMe/AboutMe';
import Blogs from './Components/Header/Blogs/Blogs';
import Checkout from './Components/Header/Checkout/Checkout';
import Header from './Components/Header/Header';
import Login from './Components/Header/Login/Login';
import NotFountPage from './Components/Header/NotFoundPage/NotFountPage';
import Registration from './Components/Header/Registration/Registration';
import Home from './Components/Home/Home';
import RequireAuth from './Components/RequireAuth/RequireAuth';

function App() {
  return (
    <div >
      <Header></Header>
      
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<AboutMe></AboutMe>}></Route>
        <Route path='/blog' element={<Blogs></Blogs>}></Route>
        <Route path='/checkout' element={
        <RequireAuth><Checkout></Checkout></RequireAuth> }></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/registration' element={<Registration></Registration>}></Route>
        <Route path='*' element={<NotFountPage></NotFountPage>}></Route>
      </Routes>
    </div>
  );
}

export default App;
