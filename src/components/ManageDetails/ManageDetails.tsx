interface ManagementProps {
  jobData: {
    id: number;
    imageSrc: string;
    imageAltText: string;
    companyName: string;
    role: string;
    responsibilities: string[];
  };
}

const ManageDetails: React.FC<ManagementProps> = ({ jobData }) => {
  return (
    <div className="grid-col-1 grid gap-6 pb-20 lg:grid-cols-2 lg:gap-6">
      <img
        src={jobData.imageSrc}
        alt={jobData.imageAltText}
        className="col-span-1 border-[10px] border-solid border-neutral-600 shadow-[1px_2px_5px_rgba(0,0,0,1)]"
      />
      <div>
        <p className="pb-3">
          <span className="font-semibold text-white">Company</span>: {jobData.companyName}
        </p>
        <p className="pb-3">
          <span className="font-semibold text-white">Roles</span>: {jobData.role}
        </p>
        <h3 className="pb-2 font-semibold text-white">Responsibilities Included:</h3>
        <ul className="pl-2">
          {jobData.responsibilities.map((item: string) => (
            <li key={item}>* {item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ManageDetails;
