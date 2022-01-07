import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar color="secondary" elevation="0">
        <Toolbar>
          <Typography sx={{ display: 'flex', flexDirection: 'row', flexGrow: 1, color: '#FFFFFF' }}>
            <Typography variant="overline" sx={{ color: '#FFFFFF' }}><b>{'<'}</b></Typography>
            <Typography variant="overline" color="primary"><b>{'K'}</b></Typography>
            <Typography variant="overline" sx={{ color: '#FFFFFF' }}><b>{'/>'}</b></Typography>
          </Typography>
          <IconButton
            size="large"
            color="white"
            edge="end"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;