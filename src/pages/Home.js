import { Parallax, ParallaxLayer } from '@react-spring/parallax'

import Header from '../components/Header';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Technologies from '../utils/Technologies';

const Home = () => {
  const alignCenter = { display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', color: '#FFFFFF' };

  return (
    <Parallax pages={5} style={{ background: '#020C1B' }}>
      <ParallaxLayer offset={0} speed={0} style={{ background: '#H7H7H7' }} />
      <ParallaxLayer offset={0} speed={0.5} style={{ ...alignCenter }}>
        <div style={{ padding: 15 }}>
          <Header />
          {/**<Logo3D/>**/}
        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={1} speed={1} style={{ height: 750, background: '#0A192F'}}/>
      <ParallaxLayer offset={1} speed={0.8} style={{ ...alignCenter }}>
        <div style={{ padding: 15 }}>
          <About />
        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={1.8} speed={0} />
      <ParallaxLayer offset={1.8} speed={0.5} factor={1.2} style={{ ...alignCenter }}>
        <div style={{ padding: 15 }}>
          <Technologies />
        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={2.6} speed={0} />
      <ParallaxLayer offset={2.6} speed={0.5} factor={1.5} style={{ ...alignCenter }}>
        <div style={{ padding: 15 }}>
          <Projects/>
        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={4} speed={0} />
      <ParallaxLayer offset={4} speed={0.5} style={{ ...alignCenter, background: '#6ddee0' }}>
        <div style={{ padding: 15 }}>
          <Contact />
        </div>
      </ParallaxLayer>
    </Parallax>
  );
}

export default Home;