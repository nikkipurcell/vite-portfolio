import Card from '../../../components/Card/Card';

import { PORTFOLIO_DATA } from '../../../assets/portfolio-data';

const Work = () => {
  return (
    <div>
      <h2 className="pb-6 text-2xl font-medium text-zinc-300 drop-shadow-lg">Digital Entertainment</h2>
      <p className="pb-6 text-zinc-300">
        For many years I worked for digital creative agencies on websites, apps and digital games for clients such as Disney, Warner Brothers, and
        Sony Pictures Entertainment. During this time I was the lead front end developer on all the following projects.
      </p>
      <div className="grid grid-cols-1 gap-2 lg:grid-cols-2 lg:gap-3 xl:grid-cols-3 xl:gap-5">
        {PORTFOLIO_DATA.map(card => (
          <Card key={card.id} cardData={card} />
        ))}
      </div>
    </div>
  );
};

export default Work;
