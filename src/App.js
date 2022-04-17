import { Route, Routes } from 'react-router-dom';
import './App.css';
import AboutMe from './Components/Header/AboutMe/AboutMe';
import Blogs from './Components/Header/Blogs/Blogs';
import Checkout from './Components/Header/Checkout/Checkout';
import Header from './Components/Header/Header';
import NotFountPage from './Components/Header/NotFoundPage/NotFountPage';
import Home from './Components/Home/Home';

function App() {
  return (
    <div className="App">
      <Header></Header>
      
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<AboutMe></AboutMe>}></Route>
        <Route path='/blog' element={<Blogs></Blogs>}></Route>
        <Route path='/checkout' element={<Checkout></Checkout>}></Route>
        <Route path='*' element={<NotFountPage></NotFountPage>}></Route>
      </Routes>
    </div>
  );
}

export default App;
