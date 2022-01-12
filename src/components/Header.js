import * as React from 'react';
import { useEffect, useRef } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';

import Typed from 'typed.js';

const Header = () => {
  const typedName = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedName.current, {
      strings: ['Manfred Kratz.'],
      startDelay: 300,
      typeSpeed: 150,
      backSpeed: 100,
      backDelay: 100
    });

    return () => {
      typed.destroy();
    };
  }, []);

  const introduction = (
    <Typography variant='overline'>
      Hello world, my name is
    </Typography>
  );

  const name = (
    <Typography variant='h3' color="text.title" mt={2}>
      <b><span ref={typedName}></span></b>
    </Typography>
  );

  const title = (
    <Typography variant='h6' mt={2} mb={5} color="primary">
      I'm a frontend engineer living near Ulm.
    </Typography>
  );

  const description = (
    <Box max-width='750px'>
      <Typography mt={2} variant='body1'  >
        I'm specializing in building user-friendly digital experiences.<br />
        Besides my passion for web development, I am convinced of the human-centered
        development approach.
      </Typography>
    </Box>
  );

  const items = [introduction, name, title, description];

  return (
    <>
      {items.map((item, i) => (
        <div mt={2} key={i}>{item}</div>
      ))}
      <Button variant="contained" color="primary" size="large" disableElevation={true} sx={{ mt: 6 }}>
        Contact me
      </Button>
    </>
  );
}

export default Header;