import * as React from 'react';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Slide from '@mui/material/Slide';

import CardsDialog from './CardsDialog';

const Cards = ({data}) => {
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
          <Card id={project.id} key={i} sx={{ m: 2, maxWidth: 325, backgroundColor: '#0A192F', color: '#FFFFFF' }}>
            <CardMedia
              component="img"
              alt={project.imageDescription}
              height="140"
              image={project.image}
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                <b>{project.name}</b>
              </Typography>
              <Typography gutterBottom variant="overline" component="div">
                {project.title}
              </Typography>
              <Typography variant="body2" mt={3} color="#FFFFFF">
                {project.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" onClick={() => handleOpen(project.id)}>Read more</Button>
            </CardActions>
          </Card>
        ))}
        <Dialog open={open} onClose={handleClose}>
          <CardsDialog handleClose={handleClose} item={isClicked}/>
        </Dialog>
    </>
  );
}

export default Cards;