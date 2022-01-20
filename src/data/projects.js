import aboutme from '../assets/aboutme.jpg';
import li1 from '../assets/projects/li2.png';
import li2 from '../assets/projects/li3.png';
import li3 from '../assets/projects/li4.png';
import li4 from '../assets/projects/li5.png';

const projectData = [
  {
    id: 1,
    name: 'Tweety',
    title: 'Social media platform',
    description: 'Realtime social media platform based on sockets.io.',
    long_desc: 'Tweety ist eine Social Media Plattform die auf Websockets (Sockets.io) basiert. Der Fokus des Projekts lag auf der Übertragung der Informationen zu Echtzeit.',
    usedTechnologies: 'Angular, Bootstrap, Express, Redis, Sockets.io',
    thumbnail: aboutme,
    images: [li1, li2],
    imageDescription: 'imagedesc'
  },
  {
    id: 2,
    name: 'Lion Investment',
    title: 'Investment banking app',
    description: 'Investment banking app for fund management by bank employees.',
    long_desc: 'Weitere Informationen',
    usedTechnologies: 'Angular, Bootstrap, Express, Redis, Sockets.io',
    thumbnail: aboutme,
    images: [li1, li2, li3, li4],
    imageDescription: 'imagedesc'
  },
  {
    id: 3,
    name: 'Time tracking',
    title: 'Time tracking app for services.',
    description: 'App to record the working hours of service employees.',
    long_desc: 'Weitere Informationen',
    usedTechnologies: 'Angular, Bootstrap, Express, Redis, Sockets.io',
    thumbnail: aboutme,
    images: [li1, li2],
    imageDescription: 'imagedesc'
  },
  {
    id: 4,
    name: 'Tile Buddys',
    title: 'Homepage for tilers.',
    description: 'Design of a homepage and cooperate identity of a tiling company.',
    long_desc: 'Weitere Informationen',
    usedTechnologies: 'Angular, Bootstrap, Express, Redis, Sockets.io',
    thumbnail: aboutme,
    images: [li1, li2],
    imageDescription: 'imagedesc'
  },
]

export default projectData;