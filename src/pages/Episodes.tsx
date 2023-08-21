import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
    fontSize: 15,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 13,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

type Episode = {
  title: string;
  pubDate: string;
  duration: string;
  guid: string;
};

type EpisodesProps = {
  episodes: Episode[];
  podcastId: string;
};

const formatDate = (inputDate: string) => {
  const date = new Date(inputDate);

  const day = date.getUTCDate();
  const month = date.getUTCMonth() + 1;
  const year = date.getUTCFullYear();

  return `${month}/${day}/${year}`;
};

const formatDuration = (inputDuration: string) => {
  const [hours, minutes, seconds] = inputDuration.split(':');

  if (hours === '00') {
    return `${minutes}:${seconds}`;
  }

  return `${hours}:${minutes}:${seconds}`;
};

const styles = {
  containerTable: {
    padding: '6px',
  },
  link: { color: '#2E86C1' },
  removeLinkStyle: {
    textDecoration: 'none',
  },
};

const Episodes: React.FC<EpisodesProps> = ({ episodes, podcastId }) => {
  return (
    <Paper sx={styles.containerTable}>
      <TableContainer>
        <Table aria-label="episodes table">
          <TableHead sx={{ borderBottom: '2px solid rgba(0, 0, 0, 0.12)' }}>
            <TableRow>
              <StyledTableCell>Title</StyledTableCell>
              <StyledTableCell align="left">Date</StyledTableCell>
              <StyledTableCell align="left">Duration</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {episodes.map((episode) => (
              <StyledTableRow key={episode.title}>
                <Link
                  style={styles.removeLinkStyle}
                  to={`/podcast/${podcastId}/episode/${episode.guid}`}
                  state={{ episode, podcastId }}
                >
                  <StyledTableCell sx={styles.link} component="th" scope="row">
                    {episode.title}
                  </StyledTableCell>
                </Link>
                <StyledTableCell align="left">
                  {formatDate(episode.pubDate)}
                </StyledTableCell>
                <StyledTableCell align="left">
                  {formatDuration(episode.duration)}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default Episodes;
