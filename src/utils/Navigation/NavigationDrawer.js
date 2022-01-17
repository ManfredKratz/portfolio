import * as React from "react";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
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
      page: 'About me',
      route: 'aboutme'
    },
    {
      page: 'Technologies',
      route: 'technologies'
    },
    {
      page: 'Projects',
      route: 'projects'
    },
    {
      page: 'Contact',
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
        <Drawer anchor="right" open={state} onClose={toggleDrawer(false)} PaperProps={{sx: { backgroundColor: 'background.main', color: 'text.main'}}}>
          <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
          >
            <List>
              {items.map(
                (text, index) => (
                  <ListItem button key={index}>
                    <HashLink smooth to={("/#" + text.route)}>{text.page}</HashLink>
                  </ListItem>
                )
              )}
            </List>
          </Box>
        </Drawer>
      </React.Fragment>
    </div>
  );
}