import * as React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import { HashLink } from 'react-router-hash-link';

export default function TemporaryDrawer() {
  const [state, setState] = React.useState(false);

  const toggleDrawer = (state) => (event) => {
    setState(state);
  };

  const items = [
    {
      page: 'Start',
      route: 'start'
    },
    {
      page: 'Über mich',
      route: 'aboutme'
    },
    {
      page: 'Technologien',
      route: 'technologies'
    },
    {
      page: 'Projekte',
      route: 'projects'
    },
    {
      page: 'Kontakt',
      route: 'contact'
    },
  ]

  return (
    <div>
      <React.Fragment>
        <IconButton
          size="large"
          color="white"
          edge="end"
          aria-label="menu"
          onClick={toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>
        <Drawer
          anchor="right"
          open={state}
          onClose={toggleDrawer(false)}
          PaperProps={{
            sx: {
              backgroundColor: "background.main",
              color: "text.main"
            }
          }}>
          <Box
            sx={{ width: 250 }}
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
          >
            <Grid
              container
              spacing={0}
              direction="column"
              alignItems="center"
              justifyContent="center"
              width="100%"
              style={{ minHeight: "100vh" }}
            >
              {items.map(
                (text, i) => (
                  <Grid item width="100%">
                    <HashLink key={i} smooth to={("/#" + text.route)} width="100%" style={{ textDecoration: 'none' }}>
                      <Button size="large" sx={{ minWidth: "100%", mb: 2 }} color="white">{text.page}</Button>
                    </HashLink>
                  </Grid>
                )
              )}
            </Grid>
          </Box>
        </Drawer>
      </React.Fragment>
    </div>
  );
}