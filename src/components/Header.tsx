import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Divider, Typography, Box, Theme } from '@mui/material';
import ProgressDot from './ProgressDot';
import usePodcastEpisodes from '../hooks/usePodcastEpisodes';
import theme from '../theme';
type HeaderProps = {
  headerTitle: string;
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  divider: {
    marginTop: '5px',
  },
  link: {
    textDecoration: 'none',
  },
  title: {
    color: theme.palette.primary.main,
    fontSize: '20px',
    fontWeight: '600',
    fontStyle: 'inherit',
  },
};

const Header: React.FC<HeaderProps> = ({ headerTitle }) => {
  let { id = '0' } = useParams<{ id: string }>();
  let { status } = usePodcastEpisodes(id);
  return (
    <>
      <Box sx={styles.container}>
        <Link to="/" style={styles.link}>
          <Typography sx={styles.title}>{headerTitle}</Typography>
        </Link>
        {status === 'loading' && <ProgressDot />}
      </Box>
      <Divider sx={styles.divider} />
    </>
  );
};

export default Header;
