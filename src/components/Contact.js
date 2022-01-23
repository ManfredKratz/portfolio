import * as React from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

import Fade from 'react-reveal-effects/Fade';

const Contact = () => {

  return (
    <Fade delay={20} bottom>
      <Box sx={{ maxWidth: "500px" }}>
        <Typography variant="h3" color="text.title"><b>Kontakt</b></Typography>
        <Typography variant="body1" mt={2} mb={4} color="primary">
          Bei sämtlichen Fragen stehe ich Ihnen gerne zur Verfügung.
        </Typography>
        <Typography variant="body1" mt={2} mb={5}>
          Manfred.Kratz@kratz-solutions.com<br />
          Mobil +49 176 61231671
        </Typography>
        <a class="mailto" href="mailto:manfred.kratz@kratz-solutions.com" style={{ textDecoration: "none" }}>
          <Button endIcon={<MailOutlineIcon />} variant="contained" size="large" color="primary" disableElevation={true}>
            E-Mail schreiben
          </Button>
        </a>
      </Box>
    </Fade>
  );
}

export default Contact;