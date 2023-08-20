import React from 'react';
import { Link } from 'react-router-dom';
import { Divider, Typography, Box } from '@mui/material';

type HeaderProps = {
  headerTitle: string;
};

const Header: React.FC<HeaderProps> = ({ headerTitle }) => {
  return (
    <Box>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <Typography
          variant="h1"
          sx={{
            color: (theme) => theme.palette.primary.main,
          }}
        >
          {headerTitle}
        </Typography>
        <Divider />
      </Link>
    </Box>
  );
};

export default Header;
