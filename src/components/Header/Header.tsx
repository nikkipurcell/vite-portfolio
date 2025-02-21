import { useState, useEffect } from 'react';
import fireFlyLogo from '/logo.png';

import './Header.css';

interface HeaderProps {
  scrollAboutCallback: () => void;
  scrollExperienceCallback: () => void;
  scrollProjectsCallback: () => void;
  scrollContactCallback: () => void;
}

const Header: React.FC<HeaderProps> = ({ scrollAboutCallback, scrollExperienceCallback, scrollProjectsCallback, scrollContactCallback }) => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;

    if (currentScrollPos > prevScrollPos) {
      setVisible(false);
    } else {
      setVisible(true);
    }

    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  });

  return (
    <nav className={`fixed h-20 ${visible ? 'up' : 'down'} `}>
      <div className="flex h-full w-full items-center justify-between">
        <a href="/" className="inline-block pl-12">
          <img src={fireFlyLogo} className="logo h-12" alt="Firefly Design Studio Logo" />
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-cyan-400 focus:outline-none focus:ring-2 focus:ring-zinc-400 md:hidden"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <div className="hidden items-center pr-12 md:block md:w-auto" id="navbar-default">
          <ul className="mt-4 flex flex-col p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:p-0 rtl:space-x-reverse">
            <li>
              <a
                href="#"
                className="block bg-cyan-400 px-3 py-2 text-gray-800 outline-cyan-400 md:bg-transparent md:p-0 md:text-cyan-400"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <button
                onClick={() => scrollAboutCallback()}
                className="border-bottom-2 block border border-x-2 border-t-0 border-cyan-400 px-3 py-2 text-cyan-400 hover:bg-cyan-500/75 hover:text-black md:border-none md:p-0 md:text-zinc-400 md:hover:bg-transparent md:hover:text-yellow-300"
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollExperienceCallback()}
                className="border-bottom-2 block border border-x-2 border-t-0 border-cyan-400 px-3 py-2 text-cyan-400 hover:bg-cyan-500/75 hover:text-black md:border-none md:p-0 md:text-zinc-400 md:hover:bg-transparent md:hover:text-yellow-300"
              >
                Experience
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollProjectsCallback()}
                className="border-bottom-2 block border border-x-2 border-t-0 border-cyan-400 px-3 py-2 text-cyan-400 hover:bg-cyan-500/75 hover:text-black md:border-none md:p-0 md:text-zinc-400 md:hover:bg-transparent md:hover:text-yellow-300"
              >
                Portfolio
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollContactCallback()}
                className="border-bottom-2 block border border-x-2 border-t-0 border-cyan-400 px-3 py-2 text-cyan-400 hover:bg-cyan-500/75 hover:text-black md:border-none md:p-0 md:text-zinc-400 md:hover:bg-transparent md:hover:text-yellow-300"
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
