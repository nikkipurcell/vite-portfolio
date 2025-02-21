import Card from '../../../components/Card/Card';

import { CODING_DATA } from '../../../assets/coding-data';

const Coding = () => {
  return (
    <div>
      <h2 className="pb-6 text-2xl font-medium text-zinc-300 drop-shadow-lg">Github Project Apps</h2>
      <p className="pb-6 text-zinc-300">
        Here are some of the apps that I've created to practice frontend skills and technologies such as Next.js, React, and TypeScript. Some of these
        are fullstack applications that include things like ecommerce, authentication, database management, and data fetching using REST API's.
      </p>
      <div className="text-zinc-300">
        {CODING_DATA.map(card => (
          <div key={card.id} className="flex flex-col pb-10 lg:flex-row xl:pb-5">
            <div className="justify-start lg:basis-1/3">
              <Card cardData={card} />
            </div>
            <div className="px-5 pt-5 lg:basis-2/3">
              <h2 className="text-center text-lg font-semibold text-white lg:text-left">{card.title}</h2>
              <p className="py-3">{card.solution}</p>
              <p className="text-sm">
                Tech Stack: <span className="font-semibold text-cyan-300">{card.technologies}</span>
              </p>
              <p className="text-sm">
                View Github Repo:{' '}
                <a className="text-cyan-300" href={card.client} target="_blank">
                  {card.brief}
                </a>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Coding;
