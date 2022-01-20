import React from "react";

import Carousel from "react-material-ui-carousel";
import Container from "@mui/material/Container";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const CardsDialog = ({ open, handleClose, items }) => {


  return (
    <>
      {open === true ?
        <Dialog
          maxWidth="md"
          open={open}
          onClose={handleClose}
          PaperProps={{ sx: { backgroundColor: 'background.main', color: 'text.main' } }}
        >
          <Container sx={{ ma: 15 }}>
            <div>
              <DialogTitle
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexGrow: 1,
                }}
              >
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <Typography variant="h5"><b>{items.name}</b></Typography>
                  <Typography variant="caption">{items.title}</Typography>
                </div>
                <IconButton
                  color="inherit"
                  onClick={handleClose}
                  aria-label="close"
                >
                  <CloseIcon />
                </IconButton>
              </DialogTitle>
              <DialogContent>
                <div>
                  <Carousel swipe={true} scroll='body'
                    indicatorIconButtonProps={{
                      style: {
                        padding: '2px',
                      }
                    }}
                  >
                    {items.images.map((item, i) => (
                      <img src={item} alt={"picture" + i} height="auto" width="100%"></img>
                    ))}
                  </Carousel>
                </div>
                <Typography variant="caption">
                  {items.usedTechnologies}
                </Typography>
                <br />
                <Typography variant="body2" color="primary" mt={2} mb={1}>
                  <b>Beschreibung</b>
                </Typography>
                <Typography variant="body2">
                  {items.long_desc}
                </Typography>
              </DialogContent>
            </div>
          </Container>
        </Dialog> : null
      }
    </>
  );
};

export default CardsDialog;