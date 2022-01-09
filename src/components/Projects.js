import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import aboutme from '../assets/aboutme.jpg';

const Projects = () => {
  return (
    <>
    <Typography variant="h4" mb={2}><b>Projects I've built</b></Typography>
    <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
    <Card sx={{ m: 2, maxWidth: 325, backgroundColor: '#0A192F', color: '#FFFFFF' }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={aboutme}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          <b>Tweety</b>
        </Typography>
        <Typography gutterBottom variant="overline" component="div">
          Social media platform
        </Typography>
        <Typography variant="body2" mt={3} color="#FFFFFF">
          Socket based social media platform with realtime posts.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
        <Card sx={{ m: 2, maxWidth: 325, backgroundColor: '#0A192F', color: '#FFFFFF' }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image={aboutme}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            <b>Lion Investment</b>
          </Typography>
          <Typography gutterBottom variant="overline" component="div">
          Investment banking app
        </Typography>
          <Typography variant="body2" mt={3} color="#FFFFFF">
            Socket based social media platform with realtime posts.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
      <Card sx={{ m: 2, maxWidth: 325, backgroundColor: '#0A192F', color: '#FFFFFF' }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image={aboutme}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            <b>Fliesen Buddy's</b>
          </Typography>
          <Typography gutterBottom variant="overline" component="div">
          Tilelayer homepage
        </Typography>
          <Typography variant="body2" mt={3} color="#FFFFFF">
            Socket based social media platform with realtime posts.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
      </div>
      </>
  );
}

export default Projects;