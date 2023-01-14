import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import NavBar from '../navbar';
import B2B from './b2b';
import { Typography } from '@mui/material';
// import Table1 from './table';

export default function LabTabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
    <NavBar/>
    <Typography sx={{textAlign:'center',fontSize:'28px'}} label="GSTR-1">GSTR-1</Typography>
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value} sx={{}}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <TabList
  value={value}
  onChange={handleChange}
  variant="scrollable"
  scrollButtons="auto"
  aria-label="scrollable auto tabs example"
>
<Tab label="B2B" value="1" />
        <Tab label="B2CL" value="2" />
        <Tab label="B2C Others" value="3"/>
        <Tab label="Export Invoices" value="4"/>
        <Tab label="Credit/Debit Notes (Registered)" value="5"/>
        <Tab label="Credit Debit Note (Unregistered)" value="6"/>
        <Tab label="Advances Received (Tax Liability)" value="7"/>
        <Tab label="Adjustment of Advances Amendments" value="8"/>
</TabList>
          
        </Box>
        <TabPanel value="1"><B2B/></TabPanel>
        <TabPanel value="2" alignItems='center'  sx={{alignItems:'center',textAlign:'center',justifyContent:'center'}}><img src='https://media.istockphoto.com/id/1273109788/vector/coming-soon-isolated-vector-icon-paper-style-promotion-sign-start-a-new-business-design.jpg?s=612x612&w=0&k=20&c=0APH6QCc371SuCEYLspgp6oh-tE5-rvbK0dzLMRmJGA='/></TabPanel>
        <TabPanel value="3" alignItems='center'  sx={{alignItems:'center',textAlign:'center',justifyContent:'center'}}><img src='https://media.istockphoto.com/id/1273109788/vector/coming-soon-isolated-vector-icon-paper-style-promotion-sign-start-a-new-business-design.jpg?s=612x612&w=0&k=20&c=0APH6QCc371SuCEYLspgp6oh-tE5-rvbK0dzLMRmJGA='/></TabPanel>
        <TabPanel value="4" alignItems='center'  sx={{alignItems:'center',textAlign:'center',justifyContent:'center'}}><img src='https://media.istockphoto.com/id/1273109788/vector/coming-soon-isolated-vector-icon-paper-style-promotion-sign-start-a-new-business-design.jpg?s=612x612&w=0&k=20&c=0APH6QCc371SuCEYLspgp6oh-tE5-rvbK0dzLMRmJGA='/></TabPanel>
        <TabPanel value="5" alignItems='center'  sx={{alignItems:'center',textAlign:'center',justifyContent:'center'}}><img src='https://media.istockphoto.com/id/1273109788/vector/coming-soon-isolated-vector-icon-paper-style-promotion-sign-start-a-new-business-design.jpg?s=612x612&w=0&k=20&c=0APH6QCc371SuCEYLspgp6oh-tE5-rvbK0dzLMRmJGA='/></TabPanel>
        <TabPanel value="6" alignItems='center'  sx={{alignItems:'center',textAlign:'center',justifyContent:'center'}}><img src='https://media.istockphoto.com/id/1273109788/vector/coming-soon-isolated-vector-icon-paper-style-promotion-sign-start-a-new-business-design.jpg?s=612x612&w=0&k=20&c=0APH6QCc371SuCEYLspgp6oh-tE5-rvbK0dzLMRmJGA='/></TabPanel>
        <TabPanel value="7" alignItems='center'  sx={{alignItems:'center',textAlign:'center',justifyContent:'center'}}><img src='https://media.istockphoto.com/id/1273109788/vector/coming-soon-isolated-vector-icon-paper-style-promotion-sign-start-a-new-business-design.jpg?s=612x612&w=0&k=20&c=0APH6QCc371SuCEYLspgp6oh-tE5-rvbK0dzLMRmJGA='/></TabPanel>
        <TabPanel value="8" alignItems='center'  sx={{alignItems:'center',textAlign:'center',justifyContent:'center'}}><img src='https://media.istockphoto.com/id/1273109788/vector/coming-soon-isolated-vector-icon-paper-style-promotion-sign-start-a-new-business-design.jpg?s=612x612&w=0&k=20&c=0APH6QCc371SuCEYLspgp6oh-tE5-rvbK0dzLMRmJGA='/></TabPanel>

        
      </TabContext>
      {/* <Table1/> */}
    </Box>
    </>
  );
}
        
        
       
