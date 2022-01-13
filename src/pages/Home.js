import { Parallax, ParallaxLayer } from '@react-spring/parallax'

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import Header from '../components/Header';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Technologies from '../utils/Technologies';

const Home = () => {
  const items = [
    { content: <Header /> },
    { content: <About /> },
    { content: <Technologies /> },
    { content: <Projects /> },
    { content: <Contact /> }
  ];

  return (
    <>
      {items.map((item) => (
        <Box sx={{ backgroundColor: 'background.main', color: 'text.main' }}>
        <Grid
          container
          spacing={0}
          alignItems="center"
          justifyContent="center"
          style={{ minHeight: "100vh" }}
        >
          <Grid item>
            <Box m={2}>{item.content}</Box>
          </Grid>
        </Grid>
        </Box>
      ))}
      </>
  );
}

export default Home;