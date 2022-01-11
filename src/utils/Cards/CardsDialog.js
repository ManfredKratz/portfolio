import * as React from 'react';

import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';

const CardsDialog = ({ item, handleClose }) => {
  return (
    <div sx={{maxWidth: 750, backgroundColor: '#0A192F', color: '#FFFFFF' }}>
    <DialogTitle>{item.name}</DialogTitle>
    <DialogContent>{item.title}</DialogContent>
      <DialogContent>
        {item.description}
      </DialogContent>
      <Button onClick={handleClose}>Close</Button>
    </div>
  );
}

export default CardsDialog;