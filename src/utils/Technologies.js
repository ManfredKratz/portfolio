import { Typography } from '@mui/material';

import js from '../assets/js.png';
import html5 from '../assets/html5.png';
import css from '../assets/css.png';
import npm from '../assets/npm.png';
import node_js from '../assets/node_js.png';
import react from '../assets/react.png';
import vue from '../assets/vue.png';
import gitlab from '../assets/gitlab.png';

const items = [
  { name: 'HTML 5', description: 'HTML 5 Logo', icon: html5 },
  { name: 'CSS', description: 'CSS 3 Logo', icon: css },
  { name: 'JavaScript', description: 'JavaScript Logo', icon: js },
  { name: 'React.js', description: 'ReactJs Logo', icon: react },
  { name: 'Vue.js', description: 'VueJs Logo', icon: vue },
  { name: 'NPM', description: 'NPM Logo', icon: npm },
  { name: 'Node.js', description: 'NodeJs Logo', icon: node_js },
  { name: 'GitLab', description: 'GitLab Logo', icon: gitlab },
];

const Technologies = () => {

  const alignContent = {
    width: '25%', display: 'flex', justifyContent: 'center',
    alignItems: 'center', flexDirection: 'column'
  };

  return (
    <>
      <Typography variant="h6" sx={{ display: 'flex', justifyContent: 'center' }} color="primary" mt={25} mb={5}>
        Technologies I've recently used:
      </Typography>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {items.map((item, i) => (
          <div key={i} style={{ ...alignContent }}>
            <img alt={item.description} src={item.icon} height="50" width="50" />
            <Typography variant="overline" mb={5}>{item.name}</Typography>
          </div>
        ))}
      </div>
      <div />
    </>
  )
}

export default Technologies;