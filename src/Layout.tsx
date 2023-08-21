import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import React from 'react';

const Layout = () => {
  return (
    <>
      <Header headerTitle="Podcaster" />
      <Outlet />
    </>
  );
};

export default Layout;
