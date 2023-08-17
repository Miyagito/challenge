import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Podcast from './pages/Podcast';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Podcast />,
  },
]);
