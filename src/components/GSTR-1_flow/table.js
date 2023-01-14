import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData( percent,Taxable_Amount, CGST, SGST, cess) {
    
  return { percent, Taxable_Amount, CGST, SGST, cess };
}

const rows = [
  createData('0%', " ", " ", " ", " "),
  createData('0.1%', " ", " ", " ", " "),
  createData('0.25%', " ", " ", " ", " "),
  createData('1%', " ", " ", " ", " "),
  createData('1.5%', " ", " ", " "," "),
  createData('3%', " ", " ", " "," "),
  createData('5%', " ", " ", " ", " "),
  createData('7.5%', " ", " ", " ", " "),
  createData('12%', " ", " ", " ", " "),
  createData('18%', " ", " ", " ", " "),
  createData('28%', " ", " ", " ", " "),
];

export default function AcccessibleTable() {
  return (
    <TableContainer >
      <Table sx={{ minWidth: 650, }} aria-label="caption table">
        <caption>Enter taxable amount without addition of taxes.*</caption>
        <TableHead>
          <TableRow>
            <TableCell>Percent</TableCell>
            <TableCell align="right">Taxable amount</TableCell>
            <TableCell align="right">CGST</TableCell>
            <TableCell align="right">SGST</TableCell>
            <TableCell align="right">cess</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.percent}>
              <TableCell component="th" scope="row">
                {row.percent}
              </TableCell>
              <TableCell align="right"><input></input></TableCell>
              <TableCell align="right"><input></input></TableCell>
              <TableCell align="right"><input></input></TableCell>
              <TableCell align="right"><input></input></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}