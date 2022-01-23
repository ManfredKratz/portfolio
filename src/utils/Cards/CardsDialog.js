import * as React from 'react';

import Container from '@mui/material/Container';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const CardsDialog = ({ open, handleClose, items }) => {

  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 }
  };

  return (
    <>
      {open === true ?
        <Dialog
          fullScreen
          titleStyle={{ textAlign: "center" }}
          open={open}
          onClose={handleClose}
          PaperProps={{ sx: { maxWidth: 1000, backgroundColor: "background.main", color: "text.main" } }}
        >
          <Container sx={{ ma: 15 }}>
            <div style={{ minWidth: "100%", maxWidth: 200, width: "100%" }}>
              <DialogContent>
                <div>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <div style={{
                      display: "flex",
                      justifyContent: "space-between",
                      flexGrow: 1,
                    }}>
                      <Typography variant="h5">
                        <b>{items.name}</b>
                      </Typography>
                      <IconButton
                        color="inherit"
                        onClick={handleClose}
                        aria-label="close"
                      >
                        <CloseIcon />
                      </IconButton>
                    </div>
                    <Typography variant="body2" mb={4}>{items.title}</Typography>
                  </div>
                  <Carousel
                    ssr={true}
                    swipeable={true}
                    showDots={true}
                   
                    responsive={responsive}
                    centerMode={false}
                  >
                    {items.images.map((item, i) => (
                      <img src={item} height="auto" width="100%" loading="lazy" alt={"image" + i}></img>
                    ))}

                  </Carousel>
                </div>
                <Grid mt={4}>
                  <Typography variant="body2" color="primary" mb={1}>
                    <b>Verwendete Technologien</b>
                  </Typography>
                  <Typography gutterBottom variant="body1">
                    <code>{items.usedTechnologies}</code>
                  </Typography>
                  <br />
                  <Typography variant="body2" color="primary" mt={2} mb={1}>
                    <b>Beschreibung</b>
                  </Typography>
                  <Typography variant="body1">
                    {items.long_desc}
                  </Typography>
                </Grid>
              </DialogContent>
            </div>
          </Container>
        </Dialog> : null
      }
    </>
  );
};

export default CardsDialog;