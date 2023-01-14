import * as React from 'react';
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
import Autocomplete from '@mui/material/Autocomplete';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { signup } from '../api_routes';
import { Snackbar } from '@mui/material';
function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        RarePay
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
const Termsofconditions='localhost:3000'
const theme = createTheme();

export default function SignUp() {
  const [isValid, setIsValid] = React.useState(false);

  function handleCheckboxChange(event) {
    setIsValid(event.target.checked);
  }
  const navigate=useNavigate();
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState('');
  const [severity, setSeverity] = React.useState('');
  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!isValid) {
      setMessage("Plz accept the terms of conditions");
      setSeverity('Alert');
      setOpen(true);
    } else {
      const data = new FormData(event.currentTarget);
    const cred={
      phonenumber: data.get('phonenumber'),
      email: data.get('email'),
      name_of_user: data.get('name_of_user'),
      city_of_business: data.get('city_of_business'),
      password: data.get('password'),
    }
    signup(cred).then((response) => {
      const { accessToken, refreshToken,message } = response.data;
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);
      navigate("/")
      setMessage(message);
      setSeverity('success');
      setOpen(true);
    
      
    }).catch((error) => {
      
      setMessage(error.response.data.error.message);
      setSeverity('error');
      setOpen(true);
     
      
      
    });
  }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
      <Snackbar
        open={open}
        message={message}
        severity={severity}
        onClose={handleClose}
      />
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
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="phonenumber"
                  required
                  fullWidth
                  id="phonenumber"
                  label="Phone No."
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="city_of_business"
                  label="City of Business"
                  name="city_of_business"
                  autoComplete="family-name"
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
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="name_of_user"
                  label="Name of User"
                  name="name_of_user"
                  autoComplete="name_of_user"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <FormControlLabel
        control={
          <Checkbox
            name="acceptTerms"
            color="primary"
            required
            onChange={handleCheckboxChange}
          />
        }
        label={
          <>
            I accept all <Link to="/terms" target="_blank" rel="noreferrer"> Terms of conditions</Link>
          </>
        }
      />
              
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
                <Link href='/signin' variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}