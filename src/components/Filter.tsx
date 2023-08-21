import * as React from 'react';
import Box from '@mui/material/Box';
import { TextField, Typography } from '@mui/material';
import theme from '../theme';

type FilterProps = {
  numOfPodcasts: number;
  onFilterChange: (filterText: string) => void;
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: 300,
    maxWidth: '100%',
    '& input': {
      height: '0.9em',
    },
    margin: '20px 30px 10px 0',
  },
  numOfPodcasts: {
    marginRight: '0.5em',
    backgroundColor: theme.palette.primary.main,
    color: 'white',
    borderRadius: '10px',
    padding: '0 0.50em',
  },
};

const Filter: React.FC<FilterProps> = ({ numOfPodcasts, onFilterChange }) => {
  return (
    <Box sx={styles.container}>
      <Typography sx={styles.numOfPodcasts}>{numOfPodcasts}</Typography>
      <TextField
        size="small"
        fullWidth
        id="fullWidth"
        placeholder="Filter podcasts..."
        onChange={(e) => onFilterChange(e.target.value)}
      />
    </Box>
  );
};

export default Filter;
