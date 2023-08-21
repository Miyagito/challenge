import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Podcast from './pages/Podcast';
import Episode from './pages/Episode';
import Layout from './Layout';

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/podcast/:id',
        element: <Podcast />,
      },
      {
        path: '/podcast/:id/episode/:id',
        element: <Episode />,
      },
    ],
  },
]);
