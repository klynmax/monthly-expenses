import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MonitorOutlinedIcon from '@mui/icons-material/MonitorOutlined';
import MoneyOffCsredOutlinedIcon from '@mui/icons-material/MoneyOffCsredOutlined';
import { NavLink, useLocation } from 'react-router-dom';
import { Grid } from '@mui/material';

import Avatars from '../Avatar';

const drawerWidth = 80;

type DrawerProps = {
  children: React.ReactNode;
};

export default function PermanentDrawerLeft({ children }: DrawerProps) {
  const location = useLocation();
  console.log(location);

  const pageName = () => {
    switch (location.pathname) {
      case '/':
        return 'Dashboard';
      case '/expenses':
        return 'Expenses';
      default:
        '';
    }
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: `calc(100% - ${drawerWidth}px)`,
          ml: `${drawerWidth}px`,
          backgroundColor: '#171821',
        }}
      >
        <Toolbar>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            display="flex"
            xl={12}
          >
            <Grid
              item
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
              display="flex"
              lg={4}
              xl={4}
            >
              <Typography variant="h6" noWrap component="div" sx={{ color: '#7a7a7a' }}>
                {pageName()}
              </Typography>
            </Grid>
            <Grid
              item
              direction="row"
              justifyContent="flex-end"
              //   alignItems="center"
              display="flex"
              lg={8}
              xl={8}
            >
              <Typography sx={{ marginRight: 1, marginTop: 1, color: '#7a7a7a' }}>
                Olá, Klynsman Guedes
              </Typography>
              <Avatars />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
          '& .MuiDrawer-paperAnchorDockedLeft': {
            borderRight: '0px',
          },
          '& .MuiPaper-elevation0': {
            boxShadow: '3px 3px 3px #21222d',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar sx={{ background: '#21222d' }} />
        <div
          style={{
            backgroundColor: '#21222d',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <List>
            <NavLink to="/">
              <ListItem disablePadding sx={{ display: 'block' }}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      // mr: open ? 3 : 'auto',
                      mr: 'auto',
                      justifyContent: 'center',
                    }}
                  >
                    <MonitorOutlinedIcon sx={{ color: '#b2f35f' }} />
                  </ListItemIcon>
                  <ListItemText />
                </ListItemButton>
              </ListItem>
            </NavLink>
            <NavLink to="/expenses">
              <ListItem disablePadding sx={{ display: 'block' }}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      // mr: open ? 3 : 'auto',
                      mr: 'auto',
                      justifyContent: 'center',
                    }}
                  >
                    <MoneyOffCsredOutlinedIcon sx={{ color: '#b2f35f' }} />
                  </ListItemIcon>
                  <ListItemText />
                </ListItemButton>
              </ListItem>
            </NavLink>
          </List>
        </div>
      </Drawer>
      <Box component="main" sx={{ marginTop: 5 }}>
        {/* <Toolbar /> */}
        {children}
      </Box>
    </Box>
  );
}
