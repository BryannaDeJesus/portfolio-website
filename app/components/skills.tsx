import { skillsData } from '@/lib/data';
import SectionHeading from './sectionHeading';

const Skills = () => {
  return (
    <section
      id='skills'
      className='mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40'
    >
      <SectionHeading heading='Technical Skills & Technologies' />
      <ul className='flex flex-wrap justify-center gap-2 text-lg text-gray-800'>
        {skillsData.technologies.map((technology, index) => (
          <li
            key={index}
            className='bg-gray-300 border border-black/[0.1] rounded-xl px-5 py-3'
          >
            {technology}
          </li>
        ))}
      </ul>
      <ul className='flex flex-wrap justify-center gap-2 text-lg text-gray-800 mt-3'>
        {skillsData.skills.map((skill, index) => (
          <li
            key={index}
            className='bg-gray-100 border border-black/[0.1] rounded-xl px-5 py-3'
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
