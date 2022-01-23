import * as React from 'react';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import CardsDialog from './CardsDialog';
import Fade from 'react-reveal-effects/Fade';

const Cards = ({ data }) => {
  const [open, setOpen] = React.useState(false);
  const [isClicked, setIsClicked] = React.useState([]);

  const handleOpen = (id) => {
    setIsClicked(data.find(e => e.id === id));
    setOpen(true);
  }

  const handleClose = () => {
    setIsClicked([]);
    setOpen(false);
  }

  return (
    <>
      {data.map((project, i) => (
        <Fade bottom delay={i * 20} key={i}>
          <Card id={project.id} onClick={() => handleOpen(project.id)} sx={{ m: 2, maxWidth: 325, backgroundColor: "#0A192F", color: "#FFFFFF" }}>
            <CardMedia
              component="img"
              alt={project.imageDescription}
              height="190"
              image={project.thumbnail}
              loading="lazy"
              sx={{mt:2}}
            />
            <CardContent>
            <Typography gutterBottom variant="overline" color="text.main" component="div">
                {project.title}
              </Typography>
              <Typography gutterBottom variant="h6" color="text.title" component="div">
                <b>{project.name}</b>
              </Typography>
              <Typography variant="body2" mt={3} color="text.main" >
                {project.description}
              </Typography>
            </CardContent>
            <CardActions >
              <Button variant="outlined" endIcon={<ArrowDropDownIcon/>} onClick={() => handleOpen(project.id)}>Mehr</Button>
            </CardActions>
          </Card>
        </Fade>
      ))}
      <CardsDialog open={open} handleClose={handleClose} items={isClicked} />
    </>
  );
}

export default Cards;