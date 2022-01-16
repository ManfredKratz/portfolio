import * as React from 'react';

import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Cards from '../utils/Cards/Cards';
import ProjectData from '../data/projects';

const Projects = () => {

  return (
    <>
      <Typography variant="h4" color="text.title" mb={2}>
        <b>Projects I've built</b>
      </Typography>
      <Grid
        container
        justifyContent="space-evenly"
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 1, sm: 2, md: 4 }}
      >
        <Cards data={ProjectData} />
      </Grid>
    </>
  );
}

export default Projects;