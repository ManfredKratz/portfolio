
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';


import NavigationDrawer from './NavigationDrawer';
function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
  * Injected by the documentation to work in an iframe.
  * You won't need it on your project.
  */
  window: PropTypes.func,
};

const Navigation = (props) => {
  return (
      <Box sx={{ flexGrow: 1 }}>
        <HideOnScroll {...props}>
          <AppBar color="secondary" elevation="0">
            <Toolbar>
              <Typography sx={{ display: 'flex', flexDirection: 'row', flexGrow: 1, color: '#FFFFFF' }}>
                <Typography variant="overline" sx={{ color: '#FFFFFF' }}><b>{'<'}</b></Typography>
                <Typography variant="overline" color="primary"><b>{'K'}</b></Typography>
                <Typography variant="overline" sx={{ color: '#FFFFFF' }}><b>{'/>'}</b></Typography>
              </Typography>
              <NavigationDrawer />
            </Toolbar>
          </AppBar>
        </HideOnScroll>
      </Box>
  );
}

export default Navigation;