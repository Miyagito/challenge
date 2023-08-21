import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Divider, Typography, Box } from '@mui/material';
import ProgressDot from './ProgressDot';
import usePodcastEpisodes from '../hooks/usePodcastEpisodes';

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
};

const Header: React.FC<HeaderProps> = ({ headerTitle }) => {
  let { id = '0' } = useParams<{ id: string }>();
  let { status } = usePodcastEpisodes(id);
  return (
    <>
      <Box sx={styles.container}>
        <Link to="/" style={styles.link}>
          <Typography
            variant="h1"
            sx={{
              color: (theme) => theme.palette.primary.main,
            }}
          >
            {headerTitle}
          </Typography>
        </Link>
        {status === 'loading' && <ProgressDot />}
      </Box>
      <Divider sx={styles.divider} />
    </>
  );
};

export default Header;
