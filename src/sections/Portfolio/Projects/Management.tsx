import ManageDetails from '../../../components/ManageDetails/ManageDetails';

import { MANAGEMENT_DATA } from '../../../assets/management-data';

const Management = () => {
  return (
    <div className="text-zinc-300">
      <h2 className="0 pb-6 text-2xl font-medium drop-shadow-lg">Management & Lead Roles</h2>
      {MANAGEMENT_DATA.map(job => (
        <ManageDetails jobData={job} key={job.id} />
      ))}
    </div>
  );
};

export default Management;
