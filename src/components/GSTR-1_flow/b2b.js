import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import Stack from '@mui/material/Stack';
import { deepOrange, green } from '@mui/material/colors';
import AssignmentIcon from '@mui/icons-material/Assignment';
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

import { Snackbar } from '@mui/material';

import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Getgstinfo } from '../../api_routes';
import AcccessibleTable from './table';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}


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
  const theme = createTheme({
    palette: {
      background: {
        default: "#e4f0e2"
      }
    },
  });
export default function B2B() {
  const [selected, setSelected] = React.useState(null);
  const [Rgstn, setRgstn] = React.useState(null)
   const email='asp.5616@gmail.com'
  
  const handleChange = (event) => {
    setSelected(event.target.value);
    
  };
  const handleChange1 = (event) => {
    
    setRgstn(event.target.value);
  };
    const handleSubmit = (event) => {
        event.preventDefault();}
  return (
    <ThemeProvider theme={theme}>
    <Container component="main" maxWidth="100px">
    
      <CssBaseline />
      <Box
        sx={{   
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1,bgcolor: green[500] }}>
  <AssignmentIcon />
</Avatar>
        <Typography component="h1" variant="h5">
          Upload B2B Invoices 
        </Typography>
        <Box sx={{ mt: 3 }} >
        <Grid container spacing={2} alignItems='center' justifyContent='center' >
      <FormControlLabel
        control={<Checkbox checked={selected === 'option1'} onChange={handleChange} value="option1" name="checkboxGroup" />}
        label="Deemed Exports"
      />
      <FormControlLabel
        control={<Checkbox checked={selected === 'option2'} onChange={handleChange} value="option2" name="checkboxGroup" />}
        label="SEZ Supplies with payment"
      />
      <FormControlLabel
        control={<Checkbox checked={selected === 'option3'} onChange={handleChange} value="option3" name="checkboxGroup" />}
        label="SEZ Supplies without payment"
      />
      <FormControlLabel
        control={<Checkbox checked={selected === 'option4'} onChange={handleChange} value="option4" name="checkboxGroup" />}
        label="Supply attract reverse charge"
      />
      <FormControlLabel
        control={<Checkbox checked={selected === 'option5'} onChange={handleChange} value="option5" name="checkboxGroup" />}
        label="Intra-State Supplies attracting IGST"
      />
      </Grid>
    </Box>
        <Box component="form" noValidate onSubmit={handleSubmit}   sx={{ mt: 3 }}  >
          <Grid container spacing={2} >
          
            <Grid item xs={12} sm={4}>
              <TextField
                autoComplete="given-name"
                name="phonenumber"
                required
                fullWidth
                onChange={handleChange1}
                id="Rgst"
                label="Receiver's GSTIN"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                required
                fullWidth
                id="city_of_business"
                label="Receiver's name"
                name="city_of_business"
                autoComplete="family-name"
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                required
                fullWidth
                id="city_of_business"
                label="Invoice Number"
                name="city_of_business"
                autoComplete="family-name"
              />
            </Grid>
            
            
            
           
            
            
          
         
            <Grid item xs={12} sm={4}>
              <TextField
                autoComplete="given-name"
                name="Invoice Date"
                required
                fullWidth
                id="Invoice Date"
                label="Invoice Date"
                
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                required
                fullWidth
                id="Supply Type"
                label="Supply Type"
                name="Supply Type"
                autoComplete="family-name"
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                required
                fullWidth
                id="Total Taxable value"
                label="Total Taxable value"
                name="Total Taxable value"
                autoComplete="family-name"
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                required
                fullWidth
                id="Total Invoice value"
                label="Total Invoice value"
                name="Total Invoice value"
                autoComplete="family-name"
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                required
                fullWidth
                id="city_of_business"
                label="POS(Only if from diffrent state)"
                name="city_of_business"
                autoComplete="family-name"
              />
            </Grid>
            
            
            
            
           
            
            
          </Grid>
          <AcccessibleTable/>
          
          <Button
            type="submit"
            alignItems="center"
            fullWidth
            variant="contained"
            
            sx={{ mt: 3, mb: 2 }}
          >
            Upload to GSTN 
          </Button>
          
        </Box>
      </Box>
      <Copyright sx={{ mt: 5 }} />
    </Container>
  </ThemeProvider>
  )
}
