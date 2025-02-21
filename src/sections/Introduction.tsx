import pdf from '../assets/npurcell_resume.pdf';
import { ArrowDownCircleIcon } from '@heroicons/react/24/solid';

interface IntroProps {
  scrollAboutCallback: () => void;
  scrollContactCallback: () => void;
}

const Intro: React.FC<IntroProps> = ({ scrollAboutCallback, scrollContactCallback }) => {
  return (
    <section className="mx-auto overflow-auto sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px]">
      <div className="mx-4 flex min-h-screen flex-wrap items-center">
        <div className="ml-12 max-w-[80%] md:ml-32 lg:ml-24">
          <h3 className="text-2xl font-medium tracking-wide text-cyan-400 drop-shadow-lg sm:text-[1.75rem]">Hi, I am</h3>
          <h1 className="mb-4 mt-2 text-4xl font-extrabold tracking-wider text-white drop-shadow-lg md:text-5xl lg:text-6xl">Nikki Purcell</h1>
          <p className="mb-6 w-full text-base font-medium text-zinc-300 drop-shadow-lg md:w-2/3 md:text-lg lg:w-1/2">
            I have an expertise in leading and managing software engineering teams with a focus on front end architecture and development. I am based
            in Los Angeles, California.
          </p>
          <p className="mb-6 w-full italic text-zinc-300 md:w-2/3 lg:w-1/2">
            I created this website using Vite to demo my skills in Typescript and TailwindCSS. Explore the rest of the sections to learn more about my
            tech and leadership skills.
          </p>
          <div className="flex max-w-full flex-col sm:flex-row">
            <a
              href={pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="h-8 w-3/5 rounded-sm bg-cyan-400 px-4 py-2 text-center text-xs font-medium outline outline-2 outline-cyan-400 hover:bg-cyan-500 sm:w-36"
            >
              Download Resume
            </a>
            <button
              onClick={() => scrollContactCallback()}
              className="ml-0 mt-5 w-3/5 rounded-sm px-4 py-2 text-center text-xs font-medium text-cyan-400 outline outline-2 outline-cyan-400 hover:bg-cyan-500/75 hover:text-black sm:ml-5 sm:mt-0 sm:w-36"
            >
              Contact Me
            </button>
          </div>
        </div>
      </div>
      <button onClick={() => scrollAboutCallback()}>
        <ArrowDownCircleIcon className="absolute bottom-12 left-1/2 size-9 text-cyan-400" />
      </button>
    </section>
  );
};

export default Intro;
