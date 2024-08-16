
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/footer/Footer';
import './App.css';
import Home from './pages/home/Home';
import Navbar from './components/navBar/NavBar';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className='min-h-[80vh]'>
          <Routes>
            {/* Defina suas rotas aqui */}
            <Route path="/" element={<Home />} />
          
          </Routes>
        </div>
        <Footer  />
      </BrowserRouter>
    </>
  );
}

export default App