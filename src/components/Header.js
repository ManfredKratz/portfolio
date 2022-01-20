import * as React from 'react';
import { useEffect, useRef } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';

import { HashLink } from 'react-router-hash-link';
import Typed from 'typed.js';
import Fade from 'react-reveal-effects/Fade';

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
     <code>Hello world, mein Name ist</code>
    </Typography>
  );

  const name = (
    <Typography variant='h3' color="text.title" mt={2}>
      <b><span ref={typedName}></span></b>
    </Typography>
  );

  const title = (
    <Typography variant='h6' mt={2} mb={5} color="primary">
      Ich bin ein Frontend Developer aus der Nähe von Ulm.
    </Typography>
  );

  const description = (
    <Box max-width='750px'>
      <Typography mt={2} variant='body1'  >
        Ich spezialisiere mich auf die Entwicklung von benutzerfreundlichen digitalen Erfahrungen.<br />
        Neben meiner Leidenschaft für die Webentwicklung und Design bin ich überzeugt von dem<br /> Ansatz des Human Centered Designs.
      </Typography>
    </Box>
  );

  const button = (
    <HashLink smooth to="/#contact">
    <Button variant="contained" color="primary" size="large" disableElevation={true} sx={{ mt: 6 }}>
      Contact me
    </Button>
    </HashLink>
  );

  const items = [introduction, name, title, description, button];

  return (
    <>
      {items.map((item, i) => (
        <Fade bottom delay={i * 300} key={i}>
          <div mt={2} >{item}</div>
        </Fade>
      ))}
    </>
  );
}

export default Header;