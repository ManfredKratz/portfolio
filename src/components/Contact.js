import * as React from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

import Fade from 'react-reveal-effects/Fade';

const Contact = () => {

  return (
    <Fade bottom>
      <Box sx={{ maxWidth: '500px' }}>
        <Typography variant="h3" color="text.title"><b>Get in touch</b></Typography>
        <Typography variant="body1" mt={2} mb={5} color="primary"> 
          Contact me if you have any questions. I am always looking for new challenges and opportunities.
        </Typography>
        <Button startIcon={<MailOutlineIcon />} variant="contained" size="large" color="primary" disableElevation={true}>
          Contact me
        </Button>
      </Box>
    </Fade>
  );
}

export default Contact;