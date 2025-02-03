import React from 'react';
import fflowImg from '../public/create-components.def5e5d1.gif';
// import mmImg from '../public/massmutual_logo.png';
import { LuGraduationCap } from 'react-icons/lu';
import { TbBriefcase2 } from 'react-icons/tb';

export const links = [
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const experiencesData = [
  {
    companyOrSchool: 'MassMutual',
    title: 'Full Stack Developer',
    location: 'New York, NY',
    description:
      'As a developer at MassMutual, my role was on a team that built and maintained an application used by financial professionals to service their clients policies. The application allows financial professionals to complete transactions digitally, as opposed to calling the service center. As a developer on this team, my role included -',
    duties: [
      'Building and maintaining the React front end.',
      'Building and maintaining the Node.js back end, developing RESTful APIs to consume enterprise APIs.',
      'Collaborating with enterprise API teams to support the development of new transactions and platform features, coordinating necessary API enhancements.',
      'Utilizing React Testing Library and Jest frameworks to ensure intended functionality of new feature development.',
      'Working with the quality assurance team to identify and resolve issues in testing environments.',
      'Utilizing internal pattern libraries built on bootstrap-react.',
      'Leveraging LaunchDarkly to allow progressive release of features.',
    ],
    date: 'May 2022 - Sept 2024',
    // image: mmImg,
    icon: React.createElement(TbBriefcase2),
  },
  {
    companyOrSchool: 'Codesmith',
    title: 'Software Engineering Immersive Program',
    location: 'New York, NY',
    description:
      'Core curriculum based in Computer Science, frontend development, backend development, and modern technologies including JavaScript, React.js, Node.js, and MongoDB.',
    duties: [],
    date: 'Nov 2021 - Feb 2022',
    // image: mmImg,
    icon: React.createElement(LuGraduationCap),
  },
  {
    companyOrSchool: 'New York University',
    title: 'Master of Science in Biology',
    location: 'New York, NY',
    description:
      'After obtaining my graduate degree, I worked in the field of reproductive medicine for 2 years before deciding I wanted to pursue a career in software development.',
    duties: [],
    date: '2017 - 2019',
    // image: mmImg,
    icon: React.createElement(LuGraduationCap),
  },
  {
    companyOrSchool: 'SUNY Binghamton',
    title: 'Bachelor of Science in Biology',
    location: 'New York, NY',
    description: '',
    duties: [],
    date: '2013 - 2017',
    // image: mmImg,
    icon: React.createElement(LuGraduationCap),
  },
] as const;

export const projects = [
  {
    title: 'PolPad',
    description:
      'description of project description of project description of project',
    technologies: ['react', 'node'],
    image: fflowImg,
    links: [],
  },
  {
    title: 'fflow',
    description:
      'Open source tool for creating React applications using drag and drop UI',
    technologies: [
      'React.js',
      'Electron',
      'TailwindUI',
      'Webpack5',
      'React-Redux',
      'Redux Toolkit',
    ],
    image: fflowImg,
    links: [
      'https://github.com/oslabs-beta/fflow?tab=readme-ov-file#built-with',
      'https://fflow.dev/',
    ],
  },
  {
    title: 'Recipe Finder',
    description: 'description of project',
    technologies: ['react', 'node'],
    image: fflowImg,
    links: [],
  },
] as const;
