import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import About from '../src/components/About/About'
import Header from '../src/components/Header/Header'
import Contact from './components/Contact/Contact/Contact';
import Login from './components/Authentication/Login/Login';
import Register from './components/Authentication/Register/Register';

function App() {
  return (
    <div >
    <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}>
        </Route>
        <Route path='/about' element={<About></About>} ></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/login' element={<Login />} ></Route>
        <Route path='/register' element={<Register />} ></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
