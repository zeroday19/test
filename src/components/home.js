import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import NavBar from './navbar';
import { ProfileInformation } from '../api_routes';
import { green } from '@mui/material/colors';
import { GlobalStyles } from '@mui/material';


function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://rarepay.co.in/">
        RarePay
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const cards = [1, 2, 3];

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: green[500],
      contrastText: "#fff",
    },
    background: {
      default: "#e5f7ff"
    },
    secondary: {
      main: green[500],
    },
  },
});

export default function Album() {
  const [isAuth, setIsAuth] = React.useState(false);
  const [usernameq, setusernameq] = React.useState('')
 
  
  React.useEffect(() => {
    
    ProfileInformation().then((response)=>{
        const {username}=response.data
         setusernameq(username)
    })
      
      
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');

    if (accessToken && refreshToken) {
      setIsAuth(true);
    }
  }, []);
  return (
    <div>
    {isAuth?
    <>
    <NavBar/>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      
      
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Welcome {usernameq},
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              Brief Informaton about our Services
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button component={Link} to='/gstservices' variant="contained">GST Services</Button>
              <Button variant="outlined">Contact Us</Button>
            </Stack>
          </Container>
        </Box>
       
      </main>
      {/* Footer */}
      <Box sx={{ p: 6 }} component="footer">
        <Typography variant="h6" text-decoration="none" fontSize="14px" align="center" gutterBottom>
        <Link to="/privacypolicy">Privacy Policy</Link> | <Link to="/terms">Terms of Condition</Link>
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
         RarePay Solutions
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
    </>:
    <>
    <NavBar/>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      
      <main>
        {/* Hero unit */}
        <Box
          sx={{
           
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Get started with RarePay,
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              About our company yet to add after discussion.
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button component={Link} to="/signup" variant="contained">Get Started</Button>
              <Button component={Link} to="/signin" variant="outlined">Login</Button>
            </Stack>
          </Container>
        </Box>
        
      </main>
      {/* Footer */}
      <Box sx={{  p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
         <a> Privacy Policy</a> | <a>Terms of Condition</a>
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider></>
  }

</div>
  );
}