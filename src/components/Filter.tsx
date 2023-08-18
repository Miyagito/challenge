import * as React from 'react';
import Box from '@mui/material/Box';
import { TextField, Typography } from '@mui/material';
import theme from '../utils/theme';

type Props = {
  numOfPodcasts: number;
  onFilterChange: (filterText: string) => void;
};

const Filter: React.FC<Props> = ({ numOfPodcasts, onFilterChange }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: 300,
        maxWidth: '100%',
        '& input': {
          height: '0.9em',
        },
      }}
    >
      <Typography
        sx={{
          marginRight: '0.5em',
          backgroundColor: theme.palette.primary.main,
          color: 'white',
          borderRadius: '10px',
          padding: '0 0.50em',
        }}
      >
        {numOfPodcasts}
      </Typography>
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
