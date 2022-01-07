import * as React from 'react';

import Avatar from '@mui/material/Avatar';

import Divider from '@mui/material/Divider';
import { Typography } from '@mui/material';
import react_logo from '../assets/react_logo.svg';

import aboutme from '../assets/aboutme.jpg'

const About = () => {

  return (
    <>
      <Avatar src={aboutme} alt='Manfred Kratz Picture' variant="rounded" sx={{ height: '150px', width: '150px' }} />
      <Typography variant='h4' sx={{ mt: 5, mb: 3 }}><b>About me</b></Typography>
      My Name is Manfred Kratz and I enjoy on developing things in the web.<br /><br />
      My passion started in school years, where I made my first webpage with HTML and CSS. <br />
      During my study I started to specialize in frontend development and created various web apps.<br />
      As a junior engineer I 'm recently working on large and complex webapps for several use cases.<br />
    </>
  );
}

export default About;