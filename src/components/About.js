import * as React from 'react';

import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import AssignmentIcon from '@mui/icons-material/Assignment';

import { Link } from 'react-router-dom';
import aboutme from '../assets/aboutme.jpg';
import Fade from 'react-reveal-effects/Fade';

const About = () => {
  return (
    <Box maxWidth={650}>
      <Fade delay={10} bottom>
        <Avatar src={aboutme} alt="Manfred Kratz Picture" variant="rounded" sx={{ height: "200px", width: "200px" }} />
        <div>
          <Typography variant="h4" color="text.title" mt={5} mb={3}><b>Über mich</b></Typography>
          <Typography color="primary"><b>Ich heiße Manfred Kratz und bin 24 Jahre alt.</b></Typography><br />
          Bereits in der Schulzeit habe ich an ersten Websites mit HTML und CSS gearbeitet.<br /><br/>
          Während meines Studiums der Fachrichtung Wirtschaftsinformatik spezialisierte ich mich zunehmend auf die
          Frontend Entwicklung und arbeite seitdem an verschiedenen Webapplikationen.<br />
          <Link to="/files/kratz_lebenslauf.pdf" target="_blank" download style={{ textDecoration: 'none' }}>
            <Button variant="outlined" size="large" endIcon={<AssignmentIcon />} color="primary" sx={{ mt: 5 }}>Lebenslauf</Button>
          </Link>
        </div>
      </Fade>
    </Box>
  );
}

export default About;