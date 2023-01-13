import React, { useState } from 'react'
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Navbar from './page/navbar';
import Main from './page/main';
import History from './page/history';
import Login from './page/authentication';
import SignUp from './page/authentication/SignUp';
import ProfilePage from './page/authentication/ProfilePage';

const theme = createTheme({
  typography: {
    fontFamily: 'Noto Sans Thai',
  }
});

function App() {
  const [username, setUsername] = useState('')
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [serverMessage, setServerMessage] = useState(false)

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* Landing Page */}
          <Route path="/" exact element={<Main />} />

          {/* History Page */}
          <Route path="/history" element={<History />} />

          {/* Authentication */}
          <Route path="/login" element={<Login setUsername={setUsername} setIsLoggedIn={setIsLoggedIn} serverMessage={serverMessage} setServerMessage={setServerMessage} />} />
          <Route path="/signup" element={<SignUp setUsername={setUsername} setIsLoggedIn={setIsLoggedIn} serverMessage={serverMessage} setServerMessage={setServerMessage} />} />
          <Route path="/profile" element={<ProfilePage isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} setUsername={setUsername} username={username} serverMessage={serverMessage} setServerMessage={setServerMessage} />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
