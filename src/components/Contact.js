import * as React from 'react';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';

const Contact = () => {

  return (
    <Box sx={{ maxWidth: '500px' }}>
        <Typography variant='h4'>
          <b>Contact me!</b>
        </Typography>
        <TextField id='outlined-basic' label='Name' variant='outlined' color='white' sx={{ minWidth: '100%', mb: 2, mt: 8}} />
        <TextField id='outlined-basic' label='E-Mail' variant='outlined' sx={{minWidth: '100%', mb: 2}} />
        <TextField id='outlined-basic' label='Message' variant='outlined' multiline rows={4} sx={{minWidth: '100%', mb: 2}} />
        <Button variant='contained' color='secondary' disableElevation={true}>Send Message</Button>
    </Box>
  );
}

export default Contact;