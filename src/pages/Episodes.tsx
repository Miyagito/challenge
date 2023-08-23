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
import theme from '../theme';
import usePodcastEpisodes from '../hooks/usePodcastEpisodes';
import Alert from '@mui/material/Alert';

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
  console.log(inputDate, 'inputDate');
  const date = new Date(inputDate);

  const day = date.getUTCDate();
  const month = date.getUTCMonth() + 1;
  const year = date.getUTCFullYear();

  return `${month}/${day}/${year}`;
};

const formatDuration = (input: string): string => {
  if (!input) {
    return '00:00';
  }

  if (input.includes(':')) {
    const parts: string[] = input.split(':');
    if (parts.length === 3) {
      const hours: number = parseInt(parts[0], 10);
      const mins: number = parseInt(parts[1], 10);
      const secs: number = parseInt(parts[2], 10);

      return `${String(hours).padStart(2, '0')}:${String(mins).padStart(
        2,
        '0',
      )}:${String(secs).padStart(2, '0')}`;
    } else {
      const mins: number = parseInt(parts[0], 10);
      const secs: number = parseInt(parts[1], 10);

      return `${String(mins).padStart(2, '0')}:${String(secs).padStart(
        2,
        '0',
      )}`;
    }
  } else {
    const totalSeconds: number = parseInt(input, 10);
    const hours: number = Math.floor(totalSeconds / 3600);
    const mins: number = Math.floor((totalSeconds - hours * 3600) / 60);
    const secs: number = totalSeconds % 60;

    if (hours > 0) {
      return `${String(hours).padStart(2, '0')}:${String(mins).padStart(
        2,
        '0',
      )}:${String(secs).padStart(2, '0')}`;
    } else {
      return `${String(mins).padStart(2, '0')}:${String(secs).padStart(
        2,
        '0',
      )}`;
    }
  }
};

const styles = {
  containerTable: {
    padding: '6px',
  },
  link: { color: theme.palette.primary.main },
  removeLinkStyle: {
    textDecoration: 'none',
  },
  tableHead: { borderBottom: '2px solid rgba(0, 0, 0, 0.12)' },
};

const Episodes: React.FC<EpisodesProps> = ({ episodes, podcastId }) => {
  console.log(episodes, 'episodes');
  return (
    <Paper sx={styles.containerTable}>
      <TableContainer>
        <Table aria-label="episodes table">
          <TableHead sx={styles.tableHead}>
            <TableRow>
              <StyledTableCell>Title</StyledTableCell>
              <StyledTableCell align="left">Date</StyledTableCell>
              <StyledTableCell align="left">Duration</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {episodes.map((episode) => (
              <StyledTableRow key={episode.guid}>
                <StyledTableCell component="th" scope="row">
                  <Link
                    style={styles.removeLinkStyle}
                    to={`/podcast/${podcastId}/episode/${episode.guid}`}
                    state={{ episode, podcastId }}
                  >
                    <span style={styles.link}>{episode.title}</span>
                  </Link>
                </StyledTableCell>
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
