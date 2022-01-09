import * as React from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const Contact = () => {

  return (
    <Box sx={{ maxWidth: '500px' }}>
      <Typography variant="h3" color="secondary"><b>Get in touch</b></Typography>
      <Typography variant="body1" mt={2} mb={5} color="secondary"> Contact me if you have any questions. I am always looking for new challenges and opportunities.</Typography>
        <Button startIcon={<MailOutlineIcon/>} variant="contained" size="large" color="secondary" disableElevation={true}>Contact me</Button>
    </Box>
  );
}

export default Contact;