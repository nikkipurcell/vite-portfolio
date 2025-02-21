interface TechItemProps {
  item: {
    id: number;
    techName: string;
  };
}

const TechItem: React.FC<TechItemProps> = ({ item }) => {
  return (
    <div className="flex">
      <div className="circle-outer">
        <div className="circle-inner"></div>
      </div>
      <p>{item.techName}</p>
    </div>
  );
};

export default TechItem;
