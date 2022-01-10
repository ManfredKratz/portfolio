import * as React from 'react';
import { useState } from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Pagination from '@mui/material/Pagination';

import Cards from '../utils/Cards';
import ProjectData from '../data/projects';

const Projects = () => {
  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <>
      <Typography variant="h4" mb={2}><b>Projects I've built</b></Typography>
      <Grid container justifyContent="space-evenly" spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, sm: 2, md: 4 }}>
        <Cards data={ProjectData} />
      </Grid>
      <Pagination count={10} page={page} onChange={handleChange} />
    </>
  );
}

export default Projects;