import { Backend_skill, Frontend_skill } from '@/constants';
import React from 'react';
import SkillDataProvider from '../sub/SkillDataProvider';
import SkillText from '../sub/SkillText';

const Skills = () => {
  return (
    <section
      id='skills'
      className='container m-auto flex flex-col items-center justify-center  gap-3 h-full relative overflow-hidden pb-0 md:pb-20'
    >
      <h2 className='text-5xl md:text-6xl text-transparent bg-clip-text font-bold bg-gradient-to-r from-[#124ae2] to-cyan-400 mb-6 mt-5 md:mt-0'>
        Skills
      </h2>
      <SkillText />
      <div className='h-full w-full pt-28 md:pt-0'>
        <div className='flex flex-row justify-around flex-wrap mt-4 gap-2 md:gap-10 items-center'>
          {Frontend_skill.map((image, index) => (
            <SkillDataProvider
              key={index}
              src={image.Image}
              width={image.width}
              height={image.height}
              index={index}
            />
          ))}
        </div>
        <div className='flex flex-row justify-around flex-wrap mt-4 gap-2 md:gap-10 items-center'>
          {Backend_skill.map((image, index) => (
            <SkillDataProvider
              key={index}
              src={image.Image}
              width={image.width}
              height={image.height}
              index={index}
            />
          ))}
        </div>
      </div>
      <div className='w-full h-full absolute'>
        <div className='w-full h-full z-[-10] opacity-50 absolute top-[-10px] md:top-0 flex items-center justify-center bg-cover'>
          <video
            className='w-full h-auto'
            preload='false'
            playsInline
            loop
            muted
            autoPlay
            src='/cards-video.webm'
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
