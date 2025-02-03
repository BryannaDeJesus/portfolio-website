import React from 'react';
import { projects } from '@/lib/data';
import SectionHeading from './sectionHeading';
import Image from 'next/image';

const Projects = () => {
  return (
    <section id='projects'>
      <SectionHeading heading='projects' />
      <div>
        {projects.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Projects;

type ProjectProps = (typeof projects)[number];

const Project = ({
  title,
  description,
  technologies,
  image,
  links,
}: ProjectProps) => {
  return (
    <section className='bg-gray-100 max-w-[42rem] border border-black/5 overflow-hidden sm:pr-8 sm:h-[20rem] relative mb-3 sm:mb-8 last:mb-0'>
      <div className='pt-4 pb-8 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] h-full flex flex-col'>
        <h3 className='text-xl font-semibold'>{title}</h3>
        <p className='mt-2 leading-relaxed text-gray-700'>{description}</p>
        <ul className='flex flex-wrap mt-4 gap-2 sm:mt-auto'>
          {technologies.map((technology, index) => (
            <li
              className='bg-black/[0.7] px-3 py-1 text=[0.7rem] uppercase tracking-wider text-white rounded-full'
              key={index}
            >
              {technology}
            </li>
          ))}
        </ul>
        {links.length != 0
          ? links.map((link, index) => (
              <a href={link} target='_blank' key={index} />
            ))
          : null}
      </div>
      <Image
        className='absolute top-8 -right-40 w-[28.25rem]'
        src={image}
        alt={title}
        quality={95}
      />
    </section>
  );
};
