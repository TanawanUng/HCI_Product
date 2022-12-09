import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Navbar from './page/navbar';

import Main from './page/main';

import History from './page/history';

const theme = createTheme({
  typography: {
    fontFamily: 'Noto Sans Thai',
});

function App() {

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* Landing Page */}
          <Route path="/" exact element={<Main />} />

          {/* History Page */}
          <Route path="/history" element={<History />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
