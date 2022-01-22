import * as React from 'react';

import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import GitHub from '@mui/icons-material/GitHub';
import LinkedIn from '@mui/icons-material/LinkedIn';
import Mail from '@mui/icons-material/Mail';

import { HashLink } from 'react-router-hash-link';

const LinkButtons = () => {
  return (
    <Stack direction="row" spacing={1}>
      <a href="https://github.com/ManfredKratz" target="_blank" rel="noreferrer">
        <IconButton aria-label="fingerprint" color="primary">
          <GitHub />
        </IconButton>
      </a>
      <a href="https://www.linkedin.com/in/manfred-kratz-485a551a6/" target="_blank" rel="noreferrer">
        <IconButton aria-label="fingerprint" color="primary">
          <LinkedIn />
        </IconButton>
      </a>
      <HashLink smooth to="/#contact">
        <IconButton aria-label="fingerprint" color="primary">
          <Mail />
        </IconButton>
      </HashLink>
    </Stack>
  );
}

export default LinkButtons;