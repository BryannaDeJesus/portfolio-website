import Image from 'next/image';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithubSquare } from 'react-icons/fa';
import { HiDownload } from 'react-icons/hi';
import { MdOutlineMail } from 'react-icons/md';

const Intro = () => {
  return (
    <section
      id='about'
      className='mb-28 max-w-[50rem] text-center sm:mb-20 scroll-mt-28 '
    >
      <div className='flex items-center justify-center'>
        <div>
          <Image
            src='/bryanna_photo.png'
            alt='Bryanna photo'
            width='150'
            height='250'
            quality='95'
            priority={true}
            className='h-24 w-24 rounded-full object-cover border-[0.15rem] border-white shadow-xl'
          />
        </div>
      </div>
      <p className='mb-10 mt-4 px-4 text-xl font-medium !leading-[1.5] sm:text-2xl'>
        Hi, <span className='font-bold'>I&apos;m Bryanna. </span>
        <br />
        I&apos;m a <span className='font-bold'>full-stack developer </span>based
        in NYC with <span className='font-bold'>3 years</span> of experience.{' '}
        <br /> My experience is primarily with{' '}
        <span className='underline'>JavaScript</span>,{' '}
        <span className='underline'>React.js</span>, and{' '}
        <span className='underline'>Node.js</span>, building innovative features
        in collaboration with product teams. I have great attention to detail,
        enjoy problem solving, and love to learn new technologies in my free
        time.
        <br />
        <br />
        Feel free to connect with me via email, LinkedIn, and GitHub below!
      </p>
      <div className='flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium'>
        <a
          href='mailto:bryanna.dejesus@gmail.com'
          target='_blank'
          className='bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 hover:bg-gray-800 transition'
        >
          <MdOutlineMail /> bryanna.dejesus@gmail.com
        </a>
        <a
          href='/DeJesusBryannaResume.pdf'
          download
          className='bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 transition cursor-pointer border border-black/10'
        >
          Download Resume <HiDownload />
        </a>
        <a
          href='https://www.linkedin.com/in/bryannadejesus/'
          target='_blank'
          className='bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full outline-none focus:scale-[1.15] hover:scale-[1.15] transition cursor-pointer border border-black/10'
        >
          <BsLinkedin />
        </a>
        <a
          href='https://github.com/BryannaDeJesus'
          target='_blank'
          className='bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full outline-none focus:scale-[1.15] hover:scale-[1.15] transition cursor-pointer border border-black/10'
        >
          <FaGithubSquare />
        </a>
      </div>
    </section>
  );
};

export default Intro;
