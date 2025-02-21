import WorkDetails from '../../components/WorkDetails/WorkDetails';
import { JOB_DATA } from '../../assets/job-data';

import './JobPositions.css';

const Leaf = () => {
  const { firstRole } = JOB_DATA.leaf;

  return (
    <div className="job-positions">
      <WorkDetails title={firstRole.title} dates={firstRole.dates} roles={firstRole.tasks} />
    </div>
  );
};

export default Leaf;
