import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Podcast from './pages/Podcast';
import Episode from './pages/Episode';

export const router = createBrowserRouter([
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
]);
