import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Map from "./pages/Map";
import './App.css';

function App() {
  return (
    <>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:id" element={<Map />} />
      </Routes>
    </>
  )
}

export default App;
