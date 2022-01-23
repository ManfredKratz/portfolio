import * as React from 'react';
import { useEffect, useRef } from 'react';

import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import LinkButtons from '../utils/LinkButtons';

import Typed from 'typed.js';
import Fade from 'react-reveal-effects/Fade';

const Header = () => {
  const typedName = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedName.current, {
      strings: ["Manfred Kratz."],
      startDelay: 300,
      typeSpeed: 50
    });

    return () => {
      typed.destroy();
    };
  }, []);

  const introduction = (
    <Typography variant="overline">
      <code>Hello world, mein Name ist</code>
    </Typography>
  );

  const name = (
    <Typography variant="h3" color="text.title" mt={2}>
      <b><span ref={typedName}></span></b>
    </Typography>
  );

  const title = (
    <Typography variant="h6" mt={2} mb={4} color="primary">
      Ich bin ein Frontend Developer aus der Nähe von Ulm.
    </Typography>
  );

  const description = (
    <Box max-width="750px">
      <Typography mt={2} variant="body1">
        Ich spezialisiere mich auf die Entwicklung von benutzerfreundlichen digitalen Erfahrungen und verfolge dabei den Ansatz
        des Human Centered Designs.
      </Typography>
    </Box>
  );

  const button = (
    <Box mt={4} ml={-1}>
      <LinkButtons />
    </Box>
  );

  const items = [introduction, name, title, description, button];

  return (
    <Box maxWidth={650}>
      {items.map((item, i) => (
        <Fade bottom delay={i * 10} key={i}>
          <div mt={2} >{item}</div>
        </Fade>
      ))}
    </Box>
  );
}

export default Header;