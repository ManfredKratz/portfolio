
import * as React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import { HashLink } from 'react-router-hash-link';
import NavigationDrawer from './NavigationDrawer';

const Navigation = () => {
  return (
      <Box sx={{ flexGrow: 1 }}>
          <AppBar color="secondary" elevation={0}>
            <Toolbar>
              <Typography sx={{ display: "flex", flexDirection: "row", flexGrow: 1, color: "#FFFFFF" }}>
              <HashLink smooth to="/#start" width="100%" style={{ display: "flex", flexDirection: "row", textDecoration: 'none' }}>
                <Typography variant="body2" sx={{ color: "#FFFFFF" }}><b>{'<'}</b></Typography>
                <Typography variant="body2" color="primary"><b>{'MK'}</b></Typography>
                <Typography variant="body2" sx={{ color: "#FFFFFF" }}><b>{'/>'}</b></Typography>
                </HashLink>
              </Typography>
              <NavigationDrawer />
            </Toolbar>
          </AppBar>
      </Box>
  );
}

export default Navigation;