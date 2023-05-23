import React from 'react'
import { Route, Routes} from "react-router-dom";
import ReactGA from 'react-ga';
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Thankyou from './pages/Thankyou';
import NotFound from './pages/NotFound';

const TRACKING_ID = "G-D6RX6BPQGV";
ReactGA.initialize(TRACKING_ID);

export default function App() {
  return (
    <>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/portfolio" element={<Portfolio/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/thankyou" element={<Thankyou/>} />
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      <Footer/>
    </>
  )
}
