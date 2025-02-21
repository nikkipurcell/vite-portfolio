import { useState, RefObject } from 'react';

import Chownow from './Chownow';
import Cornerstone from './Cornerstone';
import Leaf from './Leaf';

interface ExperienceProps {
  refProps: RefObject<HTMLDivElement>;
}

const Experience: React.FC<ExperienceProps> = ({ refProps }) => {
  const [activeButtonIndex, setActiveButtonIndex] = useState(0);

  return (
    <section ref={refProps} className="mx-auto w-full sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px]">
      <div className="flex min-h-screen items-center">
        <div className="m-10 md:ml-20 lg:ml-40 lg:max-w-[66%]">
          <h2 className="mb-6 text-5xl font-medium tracking-wide text-white drop-shadow-lg md:mb-12">Work Experience</h2>
          <div className="mb-5">
            <button
              className={`${activeButtonIndex === 0 ? 'font-semibold text-cyan-400' : 'text-zinc-300'} pr-6 text-sm md:pr-12 md:text-base`}
              onClick={() => setActiveButtonIndex(0)}
            >
              ChowNow
            </button>
            <button
              className={`${activeButtonIndex === 1 ? 'font-semibold text-cyan-400' : 'text-zinc-300'} pr-6 text-sm md:pr-12 md:text-base`}
              onClick={() => setActiveButtonIndex(1)}
            >
              Cornerstone On Demand
            </button>
            <button
              className={`${activeButtonIndex === 2 ? 'font-semibold text-cyan-400' : 'text-zinc-300'} pr-6 text-sm md:pr-12 md:text-base`}
              onClick={() => setActiveButtonIndex(2)}
            >
              Leaf Group, Inc
            </button>
          </div>
          <div className="border-t-2 border-zinc-500 pt-6">
            {activeButtonIndex === 0 && <Chownow />}
            {activeButtonIndex === 1 && <Cornerstone />}
            {activeButtonIndex === 2 && <Leaf />}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
