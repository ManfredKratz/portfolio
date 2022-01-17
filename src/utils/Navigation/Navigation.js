
import * as React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';

import NavigationDrawer from './NavigationDrawer';

const Navigation = (props) => {
  return (
      <Box sx={{ flexGrow: 1 }}>
          <AppBar color="secondary" elevation="0">
            <Toolbar>
              <Typography sx={{ display: 'flex', flexDirection: 'row', flexGrow: 1, color: '#FFFFFF' }}>
                <Typography variant="overline" sx={{ color: '#FFFFFF' }}><b>{'<'}</b></Typography>
                <Typography variant="overline" color="primary"><b>{'MK'}</b></Typography>
                <Typography variant="overline" sx={{ color: '#FFFFFF' }}><b>{'/>'}</b></Typography>
              </Typography>
              <NavigationDrawer />
            </Toolbar>
          </AppBar>
      </Box>
  );
}

export default Navigation;