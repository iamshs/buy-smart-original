import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';

function App() {
  return (
    <div >
      <Routes>
        <Route path='/' element={<Home></Home>}>
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
