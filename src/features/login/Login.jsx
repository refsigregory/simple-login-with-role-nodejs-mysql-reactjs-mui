import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { authLogin } from '../../services/auth.service';
import { useDispatch } from 'react-redux';
import { setAuth } from './authSlice';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Copyright } from '../../componets/Copyrights';

const theme = createTheme();

export default function Login() {
  const [showErrorUsername, setShowErrorUsername] = React.useState('');
  const [showErrorPassword, setShowErrorPassword] = React.useState('');

  const replace = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const dataLogin = {
      username: data.get('username'),
      password: data.get('password'),
    };
    setShowErrorUsername('')
    setShowErrorPassword('')
    if (!dataLogin.username || !dataLogin.password) {
      if (!dataLogin.username) {
        setShowErrorUsername('Please insert your Username');
      }
      if (!dataLogin.password) {
        setShowErrorPassword('Please insert your Password');
      }
      return;
    }

    try {
      const reqLogin = await authLogin({
        username: dataLogin.username,
        password: dataLogin.password
      })
      if (!reqLogin.error && reqLogin.error !== null) {
        if (reqLogin.error) {    
          if (reqLogin.message) {
            alert(reqLogin.message);
          } else {
            alert('Something wrong!');
          }
        } else { 
          dispatch(setAuth(reqLogin.data));
          localStorage.setItem('authData', JSON.stringify(reqLogin.data))
          replace('/dashboard')
        }
      } else {
        if (reqLogin.message) {
          alert(reqLogin.message);
        } else {
          alert('Failed');
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  var errorUsername = showErrorUsername ? { error: true } : {};
  var errorPassword = showErrorPassword ? { error: true } : {};
  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                autoFocus
                helperText={showErrorUsername}
                {...errorUsername}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                helperText={showErrorPassword}
                autoComplete="current-password"
                {...errorPassword}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                </Grid>
                <Grid item>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
