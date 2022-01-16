import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import Header from '../components/Header';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Technologies from '../utils/Technologies';

const Home = () => {
  const items = [
    { content: <Header />, ref: 'header' },
    { content: <About />, ref: 'aboutme' },
    { content: <Technologies />, ref: 'technologies' },
    { content: <Projects />, ref: 'projects' },
    { content: <Contact />, ref: 'contact' }
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