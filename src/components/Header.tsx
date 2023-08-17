import React from 'react';
import theme from '../utils/theme';
import { Divider, Typography, Box } from '@mui/material';

type Props = {
  headerTitle: string;
};

function Header({ headerTitle }: Props) {
  return (
    <Box>
      <Typography
        variant="h1"
        sx={{
          color: (theme) => theme.palette.primary.main,
        }}
      >
        {headerTitle}
      </Typography>
      <Divider />
    </Box>
  );
}

export default Header;
