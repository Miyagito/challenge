import * as React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';

function createData(title: string, date: string, duration: string) {
  return { title, date, duration };
}

const rows = [
  createData('Clipping work-work', '1/3/2016', '14:00'),
  createData('Clipping work-work', '1/3/2016', '14:00'),
  createData('Clipping work-work', '1/3/2016', '14:00'),
  createData('Clipping work-work', '1/3/2016', '14:00'),
  createData('Clipping work-work', '1/3/2016', '14:00'),
];

export default function Episodes() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell align="left">Date&nbsp;</TableCell>
            <TableCell align="left">Duration&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              hover
              key={row.title}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.title}
              </TableCell>
              <TableCell align="left">{row.date}</TableCell>
              <TableCell align="left">{row.duration}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
