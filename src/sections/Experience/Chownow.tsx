import WorkDetails from '../../components/WorkDetails/WorkDetails';
import { JOB_DATA } from '../../assets/job-data';

import './JobPositions.css';

const Chownow = () => {
  const { firstRole, secondRole } = JOB_DATA.chownow;

  return (
    <div className="job-positions">
      <WorkDetails title={secondRole.title} dates={secondRole.dates} roles={secondRole.tasks} />
      <WorkDetails title={firstRole.title} dates={firstRole.dates} roles={firstRole.tasks} />
    </div>
  );
};

export default Chownow;
