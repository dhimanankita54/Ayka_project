import logo from './logo.svg';
import './App.css';
import { Home } from './Components/Home';
import { Routes, Route } from 'react-router-dom';
import { Career } from './Components/Career';
import { Navbar } from './Components/Navbar';
import { Footer } from './Components/Footer';
import Cursor from 'react-cursor-follow';
import { Industries } from './Components/Industries';
import { Services } from './Components/Services';
import GoToTop from './Components/GoToTop';
import { Technologies } from './Components/Technologies';
import { About } from './Components/About';
import { Contact } from './Components/Contact';

function App() {
  return (
    <>
      <Cursor color={'#EF5350'} pulse={true} opacity={0.7} duration={0.8} />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/careers' element={<Career />}></Route>
        <Route path='/industries' element={<Industries />}></Route>
        <Route path='/services' element={<Services />}></Route>
        <Route path='/technologies' element={<Technologies />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
      </Routes>
      <Footer />
      <GoToTop />
    </>
  );
}

export default App;
