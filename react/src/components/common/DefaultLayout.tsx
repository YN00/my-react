import React from 'react';
import TopMenus from './TopMenus';
import { Outlet } from 'react-router-dom';

const DefaultLayout = (): JSX.Element => {
  return (
    <>
      <TopMenus />
      <Outlet />
    </>
  );
};

export default DefaultLayout;
