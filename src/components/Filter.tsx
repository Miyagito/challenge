import * as React from 'react';
import Box from '@mui/material/Box';
import { TextField, Typography } from '@mui/material';
import theme from '../utils/theme';

const Filter = () => {
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
        100
      </Typography>
      <TextField size="small" fullWidth id="fullWidth" />
    </Box>
  );
};

export default Filter;
