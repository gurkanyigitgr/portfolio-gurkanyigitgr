'use client';
import Image from 'next/image';
import React, { useState, useTransition } from 'react';

import { motion } from 'framer-motion';
import { slideInFromRight } from '@/utils/motion';

import TabButton from '@/components/sub/TabButton';

const TAB_DATA = [
  {
    title: 'Skills',
    id: 'skills',
    content: (
      <div className='grid grid-cols-2 space-y-1 text-gray-200'>
        <p>Next.js</p>
        <p>React</p>
        <p>JavaScript</p>
        <p>Typescript</p>
        <p>Css, Sass-Scss, TailwindCss</p>
        <p>UI Tools(Materail-UI, Shadcn UI)</p>
        <p>Redux</p>
        <p>MongoDB</p>
        <p>Prisma</p>
        <p>Node.js</p>
        <p>Express.js</p>
        <p>Jest</p>
        <p>Git</p>
      </div>
    ),
  },
  {
    title: 'Education',
    id: 'education',
    content: (
      <div className='flex flex-col md:space-y-1'>
        <p>
          Software Engineering Master&apos;s Degree Bandırma 17 Eylül University
        </p>
      </div>
    ),
  },
  {
    title: 'Courses',
    id: 'courses',
    content: (
      <div className='flex flex-col md:space-y-1'>
        <p>The Complete 2022 Web Development Bootcamp, Angela Yu</p>
        <p>Modern HTML &amp; CSS From The Beginning, Brad Traversy</p>
        <p>Advanced CSS and Sass, Jonas Schmedtmann</p>
        <p>The Complete JavaScript Course 2022, Jonas Schmedtmann</p>
      </div>
    ),
  },
  {
    title: 'Certifications',
    id: 'certifications',
    content: (
      <div className='flex flex-col md:space-y-1'>
        <p>ReCoded Turkey Frontend Bootcamp</p>
        <p>Trendyol Backend Bootcamp</p>
      </div>
    ),
  },
];

const About = () => {
  const [tab, setTab] = useState('skills');
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <section className='container m-auto mt-0 md:mt-36 text-white z-20'>
      <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 '>
        <div>
          <h2 className='text-5xl md:text-6xl text-center md:text-left text-transparent bg-clip-text font-bold bg-gradient-to-r from-[#124ae2] to-cyan-400 mb-6 mt-5 md:mt-0'>
            About Me
          </h2>
          <p className='lg:text-lg mb-10'>
            Dedicated to becoming a proficient Full Stack Web Developer, my
            passion for coding drives me to master both front-end and back-end
            development. With each project, I deepen my understanding of the
            intricate mechanics powering web applications. Every line of code I
            write contributes to refining my expertise and problem-solving
            skills.
          </p>
          <div className='flex flex-row justify-start mt-4'>
            <TabButton
              selectTab={() => handleTabChange('skills')}
              active={tab === 'skills'}
            >
              {' '}
              Skills{' '}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange('education')}
              active={tab === 'education'}
            >
              {' '}
              Education{' '}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange('courses')}
              active={tab === 'courses'}
            >
              {' '}
              Courses{' '}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange('certifications')}
              active={tab === 'certifications'}
            >
              {' '}
              Certifications{' '}
            </TabButton>
          </div>
          <div className='mt-2'>
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>
        <Image
          src='/aboutImg.png'
          width={700}
          height={700}
          alt='express'
          className='mt-10 md:mt-0'
        />
      </div>
    </section>
  );
};

export default About;
