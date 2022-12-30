import React, { useState } from 'react'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// import logo from './logo.svg';
import SignUpAPI from './SignUpAPI';

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const theme = createTheme();

function SingUp(props) {
    const [APIDetailsSignUp, setAPIDetailsSignUp] = useState({
        user: '',
        email: '',
        pass: '',
    })
    const [signUpDetails, setSignUpDetails] = useState({
        user: '',
        email: '',
        pass: '',
    })
    console.log(signUpDetails)

    function handleChange(e) {
        const { name, value } = e.target
        setSignUpDetails(prev => {
            return (
                { ...prev, [name]: value }
            )
        })
    }

    function handleSubmit() {
        setAPIDetailsSignUp({ ...signUpDetails })
    }

    return (
        <>
            {/* <div className="App">
                <header className="App-header">
                    <h2>Sign Up</h2>
                    <p>{props.serverMessage}</p>
                    <div className="login">
                        <input type="text" placeholder="User Name" name="user" value={signUpDetails.user} onChange={handleChange} />
                        <input type="email" placeholder="Email Adress" name="email" value={signUpDetails.email} onChange={handleChange} />
                        <input type="password" placeholder="Password" name="pass" value={signUpDetails.pass} onChange={handleChange} />
                        <input type="submit" onClick={handleSubmit} />
                    </div> */}
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
            {/* </header>
            </div> */}
            <ThemeProvider theme={theme}>
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <Box
                        sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign up
                        </Typography>
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        autoComplete="given-name"
                                        name="user"
                                        required
                                        fullWidth
                                        id="userName"
                                        label="User Name"
                                        autoFocus
                                        value={signUpDetails.user}
                                        onChange={handleChange}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="email"
                                        label="Email Address"
                                        name="email"
                                        autoComplete="email"
                                        value={signUpDetails.email}
                                        onChange={handleChange}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        name="pass"
                                        label="Password"
                                        type="password"
                                        id="password"
                                        autoComplete="new-password"
                                        value={signUpDetails.pass}
                                        onChange={handleChange}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <FormControlLabel
                                        control={<Checkbox value="allowExtraEmails" color="primary" />}
                                        label="I want to receive inspiration, marketing promotions and updates via email."
                                    />
                                </Grid>
                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Sign Up
                            </Button>
                            <Grid container justifyContent="flex-end">
                                <Grid item>
                                    <Link href="/login" variant="body2">
                                        Already have an account? Sign in
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                    <Copyright sx={{ mt: 5 }} />
                </Container>
            </ThemeProvider>
            <SignUpAPI APIDetailsSignUp={APIDetailsSignUp} setUsername={props.setUsername} setIsLoggedIn={props.setIsLoggedIn} setServerMessage={props.setServerMessage} />
        </>
    )


}

export default SingUp