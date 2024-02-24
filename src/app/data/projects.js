import WhiteHouse from '../assets/images/Whitehouse.png';
import BabyPlanner from '../assets/images/BabyPlanner.png';
import SJEULabServices from '../assets/images/StarringJane.png';


const images = [];
const requireImages = require.context('../assets/images/Buurtsporen', false, /\.(png|jpe?g|svg)$/);

requireImages.keys().forEach((filename) => {
  images.push(requireImages(filename));
});

const projectDATA = [
    {
      src: images,
      altText: '1',
      title: 'BuurtSporen',
      technology: ['Typescript', 'React', 'Leaflet', 'Sass', 'GraphQL', 'NestJS', 'PostgreSQL'],
      description: ['For a Non Profit Organization called Timelab i created BuurtSporen, they came to me with a idea about a platform which allows the neighborhood to share their stories, data and experiences. From hearing their rough wishes and ideas, i created the app as it exists today with a fully functional front end and admin panel.', 'After research and idea mapping, i created a PostgreSQL database connected to a GraphQL API built with NestJS, which could retrieve, store, manipulate and send the needed data to the front end.','The frontend is built using ReactJS combined with Typescript and a heavy influx of Leaflet and Sass. The app is fully responsive and has a lot of features such as a map, a filter and supports timestamps and locations with images, audio files and mp4 files.','The Admin panel is able to fully represent all the data and is able to manipulate it. It is also built with ReactJS and Typescript allows the admins to use both CSV files and JSON files to import data into map layers.'],
      link: 'https://github.com/TimelabVZW/Buurtsporen',
      code: true,
      type: 'multi'
    },
    {
      src: BabyPlanner,
      altText: '2',
      title: 'BabyPlanner',
      technology: ['Javascript', 'Handlebars', 'HTML', 'RESTful API', 'TypeORM', 'CSS'],
      description: 'I contributed in a team of 3 to a concept website/app to help women who just became a mother plan baby visits. this project really helped me to create a lot without using many tools. And really tested my abilities with Javascript and API calls.',
      link: 'https://github.com/pgm-stefdebo3/BabyPlanner',
      code: true,
      type: 'single'
    },
    {
      src: WhiteHouse,
      altText: '3',
      title: 'The White House',
      technology: ['Craft CMS', 'DDEV', 'Docker', 'Twig', 'Bootstrap'],
      description: 'This was a school project in which we utilized Craft CMS to create a website which resembles as much of thewhitehouse.gov as possible. This Build my expertise within CMS and helped me get a greater grasp on principles such as DRY, SEO and accessibility.',
      link: 'https://github.com/pgmgent/the-white-house-craft-cms-tweede-examenkans-2023-pgm-stefdebo3',
      code: true,
      type: 'single'
    },
    {
      src: SJEULabServices,
      altText: '4',
      title: 'Starring Jane Internship: European Lab Services',
      technology: ['CMS', 'PHP'],
      description: 'During my intership, which was a important and very valuable time within my studies. I Helped out multiple costumers of the company with their websites. I learned a lot about Wordpress, PHP and Vue, but during this project i had a unique experience with an old CMS built purely in PHP. This was a great learning experience and helped me to navigate better within tech-stacks i have not visited before.',
      link: 'https://www.europeanlabservices.eu/en/jobs',
      code: false,
      type: 'single'
    },
];

export default projectDATA;