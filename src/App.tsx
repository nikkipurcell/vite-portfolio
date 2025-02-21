import { useRef } from 'react';
import Header from './components/Header/Header';
import Introduction from './sections/Introduction';
import About from './sections/About/About';
import Experience from './sections/Experience/Experience';
import Portfolio from './sections/Portfolio/Portfolio';
import Contact from './sections/Contact/Contact';
import SocialIcons from './components/SocialIcons/SocialIcons';

const App = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollAboutCallback = () => {
    aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollExperienceCallback = () => {
    experienceRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollProjectsCallback = () => {
    projectsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollContactCallback = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Header
        scrollAboutCallback={scrollAboutCallback}
        scrollExperienceCallback={scrollExperienceCallback}
        scrollProjectsCallback={scrollProjectsCallback}
        scrollContactCallback={scrollContactCallback}
      />
      <SocialIcons />
      <Introduction scrollAboutCallback={scrollAboutCallback} scrollContactCallback={scrollContactCallback} />
      <About refProps={aboutRef} />
      <Experience refProps={experienceRef} />
      <Portfolio refProps={projectsRef} />
      <Contact refProps={contactRef} />
    </>
  );
};

export default App;
