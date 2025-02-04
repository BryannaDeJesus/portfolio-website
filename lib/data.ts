import React from 'react';
import fflowImg from '../public/fflow.gif';
import { LuGraduationCap } from 'react-icons/lu';
import { TbBriefcase2 } from 'react-icons/tb';
import { FaGithubSquare } from 'react-icons/fa';

export const navLinks = [
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Experience & Education',
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
] as const;

export const experiencesData = [
  {
    companyOrSchool: 'MassMutual',
    title: 'Full Stack Developer',
    location: 'New York, NY',
    description:
      'My role was on an agile team that built and maintained an application for advisors to service their clients policies digitally.',
    duties: [
      'Built and maintained the React front end.',
      'Built and maintained the Node.js back end, developed RESTful APIs to consume enterprise APIs.',
      'Collaborated with enterprise API teams to support the development of new transactions and platform features, coordinating necessary API enhancements.',
      'Utilized React Testing Library and Jest frameworks to ensure intended functionality of new feature development.',
      'Worked with the quality assurance team to identify and resolve issues in testing environments.',
      'Utilized internal pattern libraries built on bootstrap-react.',
      'Leveraged LaunchDarkly to allow progressive release of features.',
    ],
    date: 'May 2022 - Sept 2024',
    icon: React.createElement(TbBriefcase2),
  },
  {
    companyOrSchool: 'Codesmith',
    title: 'Software Engineering Immersive Program',
    location: 'New York, NY',
    description:
      'Core curriculum focused on JavaScript, computer science fundamentals, and modern web technologies.',
    duties: [
      'ES6+ JavaScript, Data Structures & Algorithms, Big-O Notation & time complexity analysis',
      'Frontend Development (React.js, Redux, Webpack & Babel',
      'Backend Development (Node.js & Express.js, RESTful API design, Authentication & Authorization, SQL & NoSQL databases)',
      'System Design & Scalability',
      'Testing & Development best practices',
    ],
    date: 'Nov 2021 - Feb 2022',
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
    icon: React.createElement(LuGraduationCap),
  },
  {
    companyOrSchool: 'SUNY Binghamton',
    title: 'Bachelor of Science in Biology',
    location: 'New York, NY',
    description: '',
    duties: [],
    date: '2013 - 2017',
    icon: React.createElement(LuGraduationCap),
  },
] as const;

export const projects = [
  {
    title: 'PolPad (work in progress)',
    description:
      'A web based application for an auto body business to manage their customers and repairs digitally.',
    technologies: [
      'TypeScript',
      'React.js',
      'Node.js',
      'Express.js',
      'GraphQL',
      'MongoDB',
    ],
    image: '',
    links: [],
    inProgress: true,
  },
  {
    title: 'Recipe Finder',
    description: 'CRUD app to search, save, and delete recipes.',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    image: '',
    links: [],
    inProgress: false,
  },
  {
    title: 'fflow',
    description:
      'Open source tool for creating React applications using drag and drop UI.',
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
      { url: 'https://fflow.dev/', type: 'fflow.dev', linkIcon: '' },
      {
        url: 'https://github.com/oslabs-beta/fflow?tab=readme-ov-file#about',
        type: 'GitHub Repo',
        linkIcon: React.createElement(FaGithubSquare),
      },
      {
        url: 'https://jpino831.medium.com/ease-into-your-next-react-app-with-fflow-f60c5a899817',
        type: 'Medium Article',
        linkIcon: React.createElement(FaGithubSquare),
      },
    ],
    inProgress: false,
  },
] as const;

export const skillsData = {
  technologies: [
    'JavaScript',
    'HTML',
    'CSS',
    'React.js',
    'Node.js',
    'Express.js',
    'MongoDB',
    'Jest',
    'React Testing Library',
    'Tailwind',
    'LaunchDarkly',
    'Redux Toolkit',
    'Webpack',
  ],
  skills: [
    'Agile Methodology',
    'Jira',
    'Unit Testing',
    'RESTful APIs',
    'Version Control',
    'Documentation',
    'CI/CD',
    'User Acceptance Testing',
  ],
} as const;
