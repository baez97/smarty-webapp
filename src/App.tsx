import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import { HomePage } from './pages/HomePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/details" element={<h1>Details</h1>}></Route>
        <Route path="*" element={<h1>We could not find your route :(</h1>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
