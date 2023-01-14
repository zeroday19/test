import React from 'react'
import Avatar from '@mui/material/Avatar';
import { Link, useNavigate } from 'react-router-dom';
import { ImportContacts } from '@mui/icons-material';
import NavBar from './navbar';
import { Button } from '@mui/material';
import PricingContent from './services';
export default function Gstservices() {
    
  return (
    <>
    <NavBar/>
    <PricingContent/>
</>
  )
}
