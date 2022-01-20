import * as React from 'react';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import AssignmentIcon from '@mui/icons-material/Assignment';

import aboutme from '../assets/aboutme.jpg';
import Fade from 'react-reveal-effects/Fade';

const About = () => {
  return (
    <Fade bottom>
      <div>
        <Avatar src={aboutme} alt='Manfred Kratz Picture' variant="rounded" sx={{ height: '200px', width: '200px' }} />
      </div>
      <div>
        <Typography variant='h4' color="text.title" mt={5} mb={3}><b>Über mich</b></Typography>
        <Typography color="primary"><b>Mein Name ist Manfred Kratz und ich habe Spaß daran, Dinge im Web zu entwickeln.</b></Typography><br />
        Meine Leidenschaft für Webtochnologien begann in der Schulzeit, in der ich bereits erste Websites<br /> mit HTML und CSS erstellt habe.
        Während meines Studiums habe ich mich zunehmend auf die<br /> Frontend-Entwicklung spezialisiert und an verschiedenen Webapplikationen gearbeitet.<br/><br/>
        Als Frontend Developer arbeite ich aktuell an größeren und komplexeren Anwendungen.<br />
      </div>
      <div>
        <Button variant="outlined" size="large" startIcon={<AssignmentIcon />} color="primary" sx={{ mt: 5 }}>Lebenslauf</Button>
      </div>
    </Fade>
  );
}

export default About;