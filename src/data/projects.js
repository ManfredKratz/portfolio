import aboutme from '../assets/aboutme.jpg';

//logos
import FB_Logo from '../assets/projects/logos/fb_logo.png'
import Lion_Logo from '../assets/projects/logos/lion_logo.png'
import TT_Logo from '../assets/projects/logos/tt_logo.png'
import Tweety_Logo from '../assets/projects/logos/tweety_logo.png'

//thumbnails
import fb_thumb from '../assets/projects/thumbnails/fb_thumb.png';
import li_thumb from '../assets/projects/thumbnails/li_thumb.png';
import tt_thumb from '../assets/projects/thumbnails/tt_thumb.png';
import tw_thumb from '../assets/projects/thumbnails/tw_thumb.png';

//Tweety
import tw0 from '../assets/projects/tweety/tw0.png'
import tw1 from '../assets/projects/tweety/tw1.jpg'
import tw2 from '../assets/projects/tweety/tw2.png'
import tw3 from '../assets/projects/tweety/tw3.jpg'
import tw4 from '../assets/projects/tweety/tw4.jpg'
import tw5 from '../assets/projects/tweety/tw5.jpg'

//Lion Investment
import li1 from '../assets/projects/lioninvest/li1.png';
import li2 from '../assets/projects/lioninvest/li2.png';
import li3 from '../assets/projects/lioninvest/li3.png';
import li4 from '../assets/projects/lioninvest/li4.png';
import li5 from '../assets/projects/lioninvest/li5.png';
import li6 from '../assets/projects/lioninvest/li6.png';
import li7 from '../assets/projects/lioninvest/li7.png';
import li8 from '../assets/projects/lioninvest/li8.png';
import li9 from '../assets/projects/lioninvest/li9.png';

//Time Tracking
import tt0 from '../assets/projects/timetrack/tt0.png'
import tt1 from '../assets/projects/timetrack/tt1.png';
import tt2 from '../assets/projects/timetrack/tt2.png';
import tt3 from '../assets/projects/timetrack/tt3.png';
import tt4 from '../assets/projects/timetrack/tt4.png';

//Fliesen Buddys
import fb0 from '../assets/projects/fb/fb0.png'
import fb1 from '../assets/projects/fb/fb1.png';
import fb2 from '../assets/projects/fb/fb2.png';
import fb3 from '../assets/projects/fb/fb3.png';
import fb4 from '../assets/projects/fb/fb4.png';
import fb5 from '../assets/projects/fb/fb5.png';
import fb6 from '../assets/projects/fb/fb6.png';
import fb7 from '../assets/projects/fb/fb7.png';

const projectData = [
  {
    id: 1,
    name: 'Tweety',
    title: 'Social Media Plattform',
    logo: Tweety_Logo,
    description: 'Realtime social media platform based on sockets.io.',
    long_desc: 'Tweety ist eine Social Media Plattform die auf Websockets (Sockets.io) basiert. Der Fokus des Projekts lag auf der Übertragung der Informationen zu Echtzeit.',
    usedTechnologies: 'Angular, Bootstrap, Express, Redis, Sockets.io',
    thumbnail: tw_thumb,
    images: [tw0, tw1, tw2, tw3, tw4, tw5],
    imageDescription: 'imagedesc'
  },
  {
    id: 2,
    name: 'Lion Investment',
    title: 'Investmentbanking App',
    logo: Lion_Logo,
    description: 'Investment banking app for fund management by bank employees.',
    long_desc: 'Weitere Informationen',
    usedTechnologies: 'Angular, Bootstrap, Express, Redis, Sockets.io',
    thumbnail: li_thumb,
    images: [li1, li2, li3, li4, li5, li6, li7, li8, li9],
    imageDescription: 'imagedesc'
  },
  {
    id: 3,
    name: 'Time tracking',
    title: 'Zeiterfassungssystem',
    logo: TT_Logo,
    description: 'App to record the working hours of service employees.',
    long_desc: 'Weitere Informationen',
    usedTechnologies: 'Angular, Bootstrap, Express, Redis, Sockets.io',
    thumbnail: tt_thumb,
    images: [tt0, tt1, tt2, tt3, tt4],
    imageDescription: 'imagedesc'
  },
  {
    id: 4,
    name: 'Fliesen Buddys',
    title: 'Fliesenleger Homepage',
    logo: FB_Logo,
    description: 'Design of a homepage and cooperate identity of a tiling company.',
    long_desc: 'Weitere Informationen',
    usedTechnologies: 'Angular, Bootstrap, Express, Redis, Sockets.io',
    thumbnail: fb_thumb,
    images: [fb0, fb1, fb2, fb3, fb4, fb5, fb6, fb7],
    imageDescription: 'imagedesc'
  },
]

export default projectData;