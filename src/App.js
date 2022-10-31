import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import About from '../src/components/About/About'
import Header from '../src/components/Header/Header'

function App() {
  return (
    <div >
      {/* <Header></Header> */}
      <Routes>
        <Route path='/' element={<Home></Home>}>
        </Route>
        <Route path='/about' element={<About></About>} ></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
