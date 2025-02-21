import { ChevronRightIcon } from '@heroicons/react/24/solid';

import './WorkDetails.css';

interface WorkDetailsProps {
  title: string;
  dates: string;
  roles: string[];
}

const WorkDetails: React.FC<WorkDetailsProps> = ({ title, dates, roles }) => {
  return (
    <div className="timeline-item ml-5 pl-4">
      <div className="timeline-icon"></div>
      <div className="timeline-content">
        <p className="mb-2 text-base text-zinc-300">{dates}</p>
        <h6 className="mb-4 text-lg font-semibold text-cyan-400">{title}</h6>
        <ul className="text-sm text-zinc-300">
          {roles.map((role, index) => (
            <li key={index} className="mb-3 flex">
              <ChevronRightIcon className="mr-1 mt-1.5 inline size-3 flex-none stroke-cyan-400 stroke-2" />
              <span className="grow">{role}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WorkDetails;
