import React from 'react';
import { projects } from '@/lib/data';
import SectionHeading from './sectionHeading';
import Image from 'next/image';

const Projects = () => {
  return (
    <section id='projects' className='scroll-mt-28'>
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
  inProgress,
}: ProjectProps) => {
  return (
    <section className='bg-gray-100 max-w-[50rem] border border-black/5 overflow-hidden sm:pr-8 sm:h-auto relative mb-3 sm:mb-8 last:mb-0'>
      <div className='pt-4 pb-8 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] h-full flex flex-col'>
        <h3 className='text-xl font-semibold'>{title}</h3>
        <p className='mt-2 leading-relaxed text-gray-700'>{description}</p>
        <div className='pt-3 pb-5 flex items-center justify-center flex-wrap gap-1 max-w-90'>
          {links.length != 0
            ? links.map((link, index) => (
                <a
                  href={link.url}
                  target='_blank'
                  key={index}
                  className='bg-white px-2 py-1 flex items-center min-w-fit gap-2 rounded-full outline-none border border-black/10'
                >
                  {link.type}
                  {link.linkIcon}
                </a>
              ))
            : null}
        </div>
        {inProgress ? (
          <span className='font-semibold'>Building with -</span>
        ) : (
          <span className='font-semibold'>Built with -</span>
        )}
        <ul className='flex flex-wrap mt-4 gap-2 sm:mt-2'>
          {technologies.map((technology, index) => (
            <li
              className='bg-black/[0.7] px-3 py-1 text=[0.7rem] uppercase tracking-wider text-white '
              key={index}
            >
              {technology}
            </li>
          ))}
        </ul>
      </div>
      {image ? (
        <Image
          className='absolute top-8 -right-10 w-[28.25rem]'
          src={image}
          alt={title}
          quality={95}
        />
      ) : null}
    </section>
  );
};
