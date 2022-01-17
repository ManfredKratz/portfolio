import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import Header from '../components/Header';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Technologies from '../utils/Technologies';

const Home = () => {
  const items = [
    { content: <Header />, id: 'start' },
    { content: <About />, id: 'aboutme' },
    { content: <Technologies />, id: 'technologies' },
    { content: <Projects />, id: 'projects' },
    { content: <Contact />, id: 'contact' }
  ];

  return (
    <Box sx={{ backgroundColor: 'background.main', color: 'text.main' }}>
      {items.map((item) => (
          <div id={item.id}>
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
          </div>
      ))}
    </Box>
  );
}

export default Home;