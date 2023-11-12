import React from 'react';
import ProjectCard from '../sub/ProjectCard';

const Projects = () => {
  return (
    <div
      className='container m-auto flex flex-col flex-wrap items-center justify-center'
      id='projects'
    >
      <h2 className='text-5xl md:text-6xl text-transparent bg-clip-text font-bold bg-gradient-to-r from-[#124ae2] to-cyan-400 mb-16 md:mb-20'>
        My Projects
      </h2>
      <div className='h-full w-full grid grid-cols-1 md:grid-cols-2 gap-10 px-10'>
        <a
          href='https://github.com/gurkanyigitgr/discord-clone'
          target='_blank'
        >
          <ProjectCard
            src='/project3.png'
            title='Discord Clone'
            description='A real-time communication platform enabling instant messaging, video calls, and file sharing. Features include user management, invitation system, aesthetic UI with TailwindCSS and ShadcnUI, database management using Prisma and MySQL, and authentication with Clerk.'
          />
        </a>
        <a
          href='https://github.com/gurkanyigitgr/kardesler_steakhouse'
          target='_blank'
        >
          <ProjectCard
            src='/project2.png'
            title='Kardesler Steakhouse'
            description='The Kardeşler Steakhouse website was developed by me using Next.js and Tailwind CSS. It offers a delightful digital experience with a minimalist design and user-friendly interface.'
          />
        </a>
        <a
          href='https://github.com/gurkanyigitgr/crowdfunding-app-team-9'
          target='_blank'
        >
          <ProjectCard
            src='/project1.png'
            title='Givingly'
            description='This project aims to create a robust crowdfunding platform that connects passionate individuals and innovative projects with a community of potential backers.'
          />
        </a>
        <a href='https://github.com/gurkanyigitgr/BankistApp' target='_blank'>
          <ProjectCard
            src='/project4.png'
            title='Bankist'
            description='This project simulates simple banking operations such as tracking account balances, making money transfers, and viewing transaction history using a modern web browser.'
          />
        </a>
        <a href='http://www.dtmustafaakyilmaz.com/' target='_blank'>
          <ProjectCard
            src='/project5.png'
            title='Dt.Mustafa Akyılmaz'
            description='This project aims to create a robust crowdfunding platform that connects passionate individuals and innovative projects with a community of potential backers.'
          />
        </a>
      </div>
    </div>
  );
};

export default Projects;
