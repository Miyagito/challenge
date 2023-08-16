import React from 'react';
import theme from '../utils/theme';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

type Props = {
  headerTitle: string;
};

function Header({ headerTitle }: Props) {
  return (
    <>
      <Typography
        variant="h1"
        sx={{
          color: (theme) => theme.palette.primary.main,
          fontSize: '1.5rem',
        }}
      >
        {headerTitle}
      </Typography>
      <Divider />
    </>
  );
}

export default Header;
