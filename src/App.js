import logo from './logo.svg';
import './App.css';
import Navbar from './Pages/Shared/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';
import Blog from './Pages/Home/Blog/Blog';
import RoboticsPM from './Pages/Projects/RoboticsPM/RoboticsPM';
import SportsMW from './Pages/Projects/SportsMW/SportsMW';
import OneStudio from './Pages/Projects/OneStudio/OneStudio';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/roboticsPM' element={<RoboticsPM></RoboticsPM>}></Route>
        <Route path='/sportsMW' element={<SportsMW></SportsMW>}></Route>
        <Route path='/oneStudio' element={<OneStudio></OneStudio>}></Route>
        
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
