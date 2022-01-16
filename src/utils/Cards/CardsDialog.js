import * as React from 'react';

import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';

const CardsDialog = ({ item, handleClose }) => {
  return (
    <div sx={{ maxWidth: 750 }}>
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