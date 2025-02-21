import { useState, RefObject } from 'react';

import Coding from './Projects/Coding';
import Work from './Projects/Work';
import Management from './Projects/Management';
// import Personal from './Projects/Personal';
// import Creative from './Projects/Creative';

interface PortfolioProps {
  refProps: RefObject<HTMLDivElement>;
}

const Portfolio: React.FC<PortfolioProps> = ({ refProps }) => {
  const [activeButtonIndex, setActiveButtonIndex] = useState(0);

  return (
    <section ref={refProps} className="mx-auto w-full sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px]">
      <div className="flex min-h-screen items-center">
        <div className="m-10 md:ml-20 lg:ml-16 lg:max-w-[90%]">
          <h2 className="mb-12 text-5xl font-medium tracking-wide text-white drop-shadow-lg">Portfolio</h2>
          <div className="mb-5">
            <button className={`${activeButtonIndex === 0 ? 'text-cyan-400' : 'text-zinc-300'} pr-12`} onClick={() => setActiveButtonIndex(0)}>
              Management & Leadership
            </button>
            <button className={`${activeButtonIndex === 1 ? 'text-cyan-400' : 'text-zinc-300'} pr-12`} onClick={() => setActiveButtonIndex(1)}>
              Github Projects
            </button>
            <button className={`${activeButtonIndex === 2 ? 'text-cyan-400' : 'text-zinc-300'} pr-12`} onClick={() => setActiveButtonIndex(2)}>
              Entertainment Projects
            </button>

            {/* <button className={`${activeButtonIndex === 2 ? 'text-cyan-400' : 'text-zinc-300'} pr-12`} onClick={() => setActiveButtonIndex(2)}>
          Personal Projects
        </button>
        <button className={`${activeButtonIndex === 3 ? 'text-cyan-400' : 'text-zinc-300'} pr-12`} onClick={() => setActiveButtonIndex(3)}>
          Creative Projects
        </button> */}
          </div>
          <div className="border-t-2 border-zinc-500 pt-6">
            {activeButtonIndex === 0 && <Management />}
            {activeButtonIndex === 1 && <Coding />}
            {activeButtonIndex === 2 && <Work />}
            {/* {activeButtonIndex === 2 && <Personal />}
        {activeButtonIndex === 3 && <Creative />} */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
