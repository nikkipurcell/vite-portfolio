import Card from '../../../components/Card/Card';

import { PERSONAL_PROJECTS_DATA } from '../../../assets/personal-projects';

const Personal = () => {
  return (
    <div>
      <h2 className="pb-6 text-2xl font-medium text-zinc-300 drop-shadow-lg">Personal Web Projects</h2>
      <p className="pb-6 text-zinc-300">The following are my personal websites that I designed and created from scratch.</p>
      <div className="grid grid-cols-3 gap-5">
        {PERSONAL_PROJECTS_DATA.map(card => (
          <Card key={card.id} cardData={card} />
        ))}
      </div>
    </div>
  );
};

export default Personal;
