import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from '../components/Navbar';
import Card from '../pages/Card';
import Drag from '../pages/Drag';


const Approuter = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/drag" element={<Drag />} />
        <Route path="/card" element={<Card />} />
      </Routes>
    </div>
  );
}

export default Approuter