import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from './page/navbar';

import Main from './page/main';

import History from './page/history';

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* Landing Page */}
        <Route path="/" exact element={<Main />} />

        {/* History Page */}
        <Route path="/history" element={<History />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
