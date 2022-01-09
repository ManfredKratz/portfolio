import * as React from 'react';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import AssignmentIcon from '@mui/icons-material/Assignment';

import aboutme from '../assets/aboutme.jpg';
import Technologies from '../utils/Technologies';

const About = () => {
  return (
    <>
      <Avatar src={aboutme} alt='Manfred Kratz Picture' variant="rounded" sx={{ height: '150px', width: '150px' }} />
      <Typography variant='h4' mt={5} mb={3}><b>About me</b></Typography>
      <Typography color="primary"><b>My Name is Manfred Kratz and I enjoy on developing things in the web.</b></Typography><br />
      My passion started in school years, where I made my first webpage with HTML and CSS. <br />
      During my study I started to specialize in frontend development and created various web apps.<br /><br />
      As a junior engineer I 'm recently working on larger and more complex applications.<br />
      <Button variant="outlined" startIcon={<AssignmentIcon />} color="primary" sx={{mt: 5}}>Get my resume</Button>
      <Technologies/>
    </>
  );
}

export default About;