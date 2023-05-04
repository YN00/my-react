import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import { Link } from 'react-router-dom';

import { findPathByName } from '../../router/findPathByName';

const navItems: string[] = ['Home', 'Analysis'];

const Menus = (): JSX.Element => {
  return (
    <List style={{ display: 'flex' }}>
      {navItems.map((menu, i) => {
        return (
          <ListItem key={i}>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <Link to={findPathByName(menu.toLowerCase())}>
                <span style={{ color: 'black' }}>{menu}</span>
              </Link>
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
};

const TopMenus = (): JSX.Element => {
  return (
    <>
      <AppBar>
        <Toolbar>
          <Menus />
        </Toolbar>
      </AppBar>
    </>
  );
};

export default TopMenus;
