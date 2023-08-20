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

type Episode = {
  title: string;
  pubDate: string;
  duration?: string;
};

type EpisodesProps = {
  episodes: Episode[];
};

export default function Episodes({ episodes }: EpisodesProps) {
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
          {episodes.map((episode) => (
            <TableRow
              hover
              key={episode.title}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {episode.title}
              </TableCell>
              <TableCell align="left">{episode.pubDate}</TableCell>
              <TableCell align="left">{episode.duration}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
