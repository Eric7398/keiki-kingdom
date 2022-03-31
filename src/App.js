import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion';

import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Price from "./components/price/Price";
import NotFound from './components/404/NotFound';
import Rules from './components/rules/Rules';


function App() {
  const location = useLocation()
  return (
    <>
      <Navbar />
      <AnimatePresence exitBeforeEnter>
        <Routes key={location.pathname} location={location}>


          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/price" element={<Price />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="*" element={<NotFound />} />


        </Routes>
      </AnimatePresence>

    </>
  );
}

export default App;
