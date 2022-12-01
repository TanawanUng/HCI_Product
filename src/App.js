import React from 'react';
import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from './page/navbar/Navbar';

import Main from './page/main/Main';

import HistoryPage from './page/history/HistoryPage';

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* Landing Page */}
        <Route path="/" exact element={<Main />} />

        {/* History Page */}
        <Route path="/history" element={<HistoryPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
