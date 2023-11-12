'use client';
import React from 'react';
import { motion } from 'framer-motion';
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from '@/utils/motion';
import { SparklesIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
export default function HeroContent() {
  return (
    <motion.div
      initial='hidden'
      animate='visible'
      className='container mx-auto flex flex-col items-center justify-center h-full w-full z-[20] mt-40 md:mt-10 md:flex-row '
    >
      <div className='h-full w-full flex flex-col gap-5 justify-center m-auto text-start px-3 md:py-0'>
        <motion.div
          variants={slideInFromTop}
          className='welcome-box py-[10px] px-[4px] opacity-[0.9] cursor-pointer'
        >
          <SparklesIcon className='text-white mr-[10px] ml-2 h-5 w-5 animate-pulse' />
          <h1 className='welcome-text text-sm font-bold mr-2 md:text-[14px]'>
            Full-Stack Developer Portfolio
          </h1>
        </motion.div>
        <motion.div
          variants={slideInFromLeft(0.5)}
          className='flex flex-col gap-6 mt-6 text-5xl font-bold text-white max-w-[600px] w-auto h-auto md:text-6xl '
        >
          <span>
            Providing
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#124ae2] to-cyan-500'>
              {' '}
              the best{' '}
            </span>
            project experience
          </span>
        </motion.div>
        <motion.p
          variants={slideInFromLeft(0.8)}
          className='text-lg text-gray-400 my-5 max-w-[600px]'
        >
          I&apos;m a Full-Stack Developer with experience in Website and
          Software development. Check out my projects and skills.
        </motion.p>
        <motion.a
          variants={slideInFromLeft(1)}
          className='py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]'
          href='https://www.linkedin.com/in/gurkanyigit/'
          target='_blank'
        >
          Learn More!
        </motion.a>
      </div>
      <motion.div
        variants={slideInFromRight(0.8)}
        className='flex justify-center items-center mt-10 md:mt-0'
      >
        <Image
          className='h-[300px] w-[300px] md:h-[700px] md:w-[700px] md:block'
          src='/header-img.svg'
          alt='work icons'
          height={700}
          width={700}
        />
      </motion.div>
    </motion.div>
  );
}
