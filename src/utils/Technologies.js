import { Typography } from '@mui/material';

import js from '../assets/technologies/js.png';
import ts from '../assets/technologies/ts.png'
import html5 from '../assets/technologies/html.png';
import css from '../assets/technologies/css3.png';
import npm from '../assets/technologies/npm.png';
import node_js from '../assets/technologies/node.png';
import react from '../assets/technologies/react.png';
import vue from '../assets/technologies/vue.png';
import gitlab from '../assets/technologies/git.png';
import docker from '../assets/technologies/docker.png';
import graphql from '../assets/technologies/graphql.png';
import sass from '../assets/technologies/sass.png';

import Fade from 'react-reveal-effects/Fade';

const items = [
  { name: 'HTML 5', description: 'HTML 5 Logo', icon: html5 },
  { name: 'CSS', description: 'CSS 3 Logo', icon: css },
  { name: 'JavaScript', description: 'JavaScript Logo', icon: js },
  { name: 'TypeScript', description: 'TypeScript Logo', icon: ts },
  { name: 'React.js', description: 'ReactJs Logo', icon: react },
  { name: 'Vue.js', description: 'VueJs Logo', icon: vue },
  { name: 'NPM', description: 'NPM Logo', icon: npm },
  { name: 'Node.js', description: 'NodeJs Logo', icon: node_js },
  { name: 'Git', description: 'Git Logo', icon: gitlab },
  { name: 'Docker', description: 'Docker Logo', icon: docker },
  { name: 'GraphQL', description: 'GraphQL Logo', icon: graphql },
  { name: 'SASS/SCSS', description: 'SASS Logo', icon: sass },
];

const Technologies = () => {

  const alignContent = {
    width: '25%', display: 'flex', justifyContent: 'center',
    alignItems: 'center', flexDirection: 'column'
  };

  return (
    <>
      <Typography variant="h6" sx={{ display: 'flex', justifyContent: 'center' }} color="primary.main" mt={25} mb={5}>
        Technologien die ich aktuell nutze
      </Typography>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {items.map((item, i) => (
          <Fade bottom delay={i * 20} key={i} >
            <div style={{ ...alignContent }}>
              <img alt={item.description} src={item.icon} height="50" width="50" />
              <Typography variant="overline" mb={5}>{item.name}</Typography>
            </div>
          </Fade>
        ))}
      </div>
      <div />
    </>
  )
}

export default Technologies;