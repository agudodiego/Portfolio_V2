// Componente que implementa las transiciones animadas de Framer Motion.
// Hecho siguiendo: https://youtu.be/FdrEjwymzdY
import React from 'react';
import { useLocation, Routes, Route } from 'react-router-dom';
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

import { AnimatePresence } from "framer-motion";

const AnimatedRoutes = () => {

  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path='/Portfolio_V2' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
