import React from 'react';
import HeroContent from '../sub/HeroContent';

export default function Hero() {
  return (
    <div className='relative flex flex-col h-full w-full'>
      <video
        autoPlay
        playsInline
        muted
        loop
        className='rotate-180 absolute top-[-500px] md:top-[300px] left-0 z-[1] w-full h-full object-cover sm:object-contain'
      >
        <source src='/blackhole.mp4' type='video/mp4' />
      </video>
      <HeroContent />
    </div>
  );
}
