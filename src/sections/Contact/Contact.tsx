import { RefObject } from 'react';
import pdf from '../../assets/npurcell_resume.pdf';

interface ContactProps {
  refProps: RefObject<HTMLDivElement>;
}

const Contact: React.FC<ContactProps> = ({ refProps }) => {
  return (
    <section ref={refProps} className="mx-auto h-screen max-w-6xl p-10 text-center text-zinc-300">
      <h2 className="mb-12 text-center text-5xl font-medium tracking-wide text-white drop-shadow-lg">Get In Touch</h2>
      <p className="text-2xl">I'm always open to discuss new employment opportunities! If interested, you can contact me by:</p>
      <ul className="pt-10">
        <li className="pb-5">
          Sending me a message through{' '}
          <a href="https://www.linkedin.com/in/nikkipurcell/" className="text-cyan-300" target="_blank">
            LinkedIn
          </a>
        </li>
        <li>
          Email me directly at <span className="text-cyan-300">nikkiblade68@yahoo.com</span>
        </li>
        <li className="pt-5">
          Download a copy of my{' '}
          {
            <a href={pdf} target="_blank" rel="noopener noreferrer" className="text-cyan-300">
              resume
            </a>
          }{' '}
          for more details
        </li>
        <li className="pt-10">Thank you!</li>
      </ul>
    </section>
  );
};

export default Contact;
