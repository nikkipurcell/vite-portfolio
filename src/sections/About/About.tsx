import { RefObject } from 'react';
import profilePic from '/profilepic.jpg';

import { TECH_DATA } from '../../assets/tech-data';

import './About.css';
import TechItem from '../../components/TechItem/TechItem';

interface AboutProps {
  refProps: RefObject<HTMLDivElement>;
}

const About: React.FC<AboutProps> = ({ refProps }) => {
  return (
    <section ref={refProps} className="mx-auto w-full sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px]">
      <div className="mx-4 flex min-h-screen items-center">
        <div className="ml-12 max-w-[80%] md:ml-32 lg:ml-24">
          <h2 className="mb-10 text-5xl font-medium tracking-wide text-white drop-shadow-lg">About me</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 md:gap-4">
            <div className="text-zinc-300 md:col-span-2">
              <p className="mb-4 text-left text-2xl font-medium text-zinc-300 drop-shadow-lg md:mb-4">
                Hello! my name is Nikki Purcell. I am a senior front end software engineer based in Los Angeles, California.
              </p>
              <p className="pb-5">
                With over 7 years of experience managing and leading front end teams and over 15 years working as a front end engineer I have a proven
                track record of delivering complex software applications efficiently and with a focus on high-quality user experiences.
              </p>
            </div>
            <div className="mb-5 flex items-start justify-center md:col-span-2">
              <img
                src={profilePic}
                alt="profile image"
                className="w-1/2 border-[10px] border-solid border-neutral-600 shadow-[1px_2px_5px_rgba(0,0,0,1)] md:w-3/4 lg:w-1/2"
              />
            </div>
          </div>

          <div className="pb-6 text-cyan-400 md:pb-8">Some of my favorite technologies to work with are:</div>

          <div className="grid grid-flow-col grid-rows-8 gap-1 text-zinc-300 sm:gap-2 md:grid-rows-6 md:gap-3 lg:grid-rows-4 lg:gap-4">
            {TECH_DATA.map(item => (
              <TechItem key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
