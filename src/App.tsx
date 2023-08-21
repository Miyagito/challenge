import React from 'react';
import './App.css';
import { router } from './router';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import { Provider } from 'react-redux';
import store from './store/store';
import Header from './components/Header';
import { Box } from '@mui/material';

const styles = {
  container: {
    margin: '0 15%',
  },
};
function App() {
  return (
    <Box sx={styles.container}>
      <Provider store={store}>
        {/* <Header headerTitle="Podcaster" />, */}
        <ThemeProvider theme={theme}>
          <RouterProvider router={router} />
        </ThemeProvider>
      </Provider>
    </Box>
  );
}

export default App;
