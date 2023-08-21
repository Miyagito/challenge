import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2E86C1',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: '#f44336',
    },
    background: {
      default: '#f5f5f5',
    },
  },
  typography: {
    fontFamily: '"Open Sans", sans-serif',
    h1: {
      fontSize: '18px',
      fontWeight: 700,
    },
    h2: {
      fontSize: '1.5rem',
      fontWeight: 600,
    },
    subtitle1: {
      fontSize: '12px',
      fontWeight: 700,
      color: 'rgba(0, 0, 0, 0.87)',
    },
    body1: {
      fontSize: '12px',
      fontStyle: 'italic',
      color: 'rgba(0, 0, 0, 0.6)',
      fontWeight: 500,
      '& a': {
        color: '#2E86C1',
        textDecoration: 'none',
      },
    },
    body2: {
      fontSize: '12px',
      fontWeight: 500,
      color: 'rgba(0, 0, 0, 0.6)',
      fontStyle: 'italic',
    },
    subtitle2: {
      fontSize: '12px',
      fontWeight: 700,
      color: 'rgba(0, 0, 0, 0.6)',
      fontStyle: 'italic',
    },
  },
});

export default theme;
