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
    description: 'Echtzeit Social Media Plattform basierend auf Sockets.io und Redis.',
    long_desc: 'Tweety ist eine Social Media Plattform, die auf Websockets (Sockets.io) basiert. Der Fokus des Projekts lag auf der Übertragung der Informationen in Echtzeit sowie der Erstellung eines minimalistischen Designs.',
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
    description: 'Softwarelösung für das Management einer Fondsinvestmentbank.',
    long_desc: 'Die Anwendung stellt eine Softwarelösung für eine Fondsinvestmentbank dar. In diesem Projekt wurde für das Investmenthaus „Lion Investment“ ein Programm entworfen, welches Geschäftsprozesse digital abbildet. Die Kundenverwaltung und Beraterübersicht bis hin zur Administration der Kundeneinlagen in die jeweiligen Investmentfonds wurden in der Anwendung berücksichtigt.',
    usedTechnologies: 'Vue, Vuetify, Express, Nodejs, PostgreSQL',
    thumbnail: li_thumb,
    images: [li1, li2, li3, li4, li5, li6, li7, li8, li9],
    imageDescription: 'imagedesc'
  },
  {
    id: 3,
    name: 'Time tracking',
    title: 'Zeiterfassungssystem',
    logo: TT_Logo,
    description: 'Anwendung zur Zeiterfassung von Service Mitarbeiter*innen im Außendienst.',
    long_desc: 'Im Rahmen des Projekts geht es speziell um eine Software für die Arbeitszeiterfassung der Service-Techniker*innen im Außendienst. Diese soll die Möglichkeit bieten erledigte Einsätze direkt vor Ort bei den Kund*innen des Unternehmens zu dokumentieren.',
    usedTechnologies: 'Vue, Vuetify, Express, Nodejs, SQLite ',
    thumbnail: tt_thumb,
    images: [tt0, tt1, tt2, tt3, tt4],
    imageDescription: 'imagedesc'
  },
  {
    id: 4,
    name: 'Fliesen Buddys',
    title: 'Fliesenleger Homepage',
    logo: FB_Logo,
    description: 'Homepage für eine Fliesenlegerfirma inkl. Erstellung einer Cooperate Identity.',
    long_desc: 'Das Projekt Fliesen Buddys umfasste neben der Umsetzung der Seite die Erstellung einer Cooperate Identity. Der Fokus lag primär auf der korrekten Darstellung der mobilen Ansicht der Homepage.',
    usedTechnologies: 'Vue, Vuetify',
    thumbnail: fb_thumb,
    images: [fb0, fb1, fb2, fb3, fb4, fb5, fb6, fb7],
    imageDescription: 'imagedesc'
  },
]

export default projectData;