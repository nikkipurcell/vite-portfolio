import React, { useState } from 'react';
import Modal from '../Modal/Modal';

import './Card.css';

export interface CardProps {
  cardData: {
    id: number;
    title: string;
    fulltitle: string;
    client: string;
    role: string;
    imageSrc: string;
    imageBigSrc: string;
    brief: string;
    solution: string;
    technologies: string[];
    modal: boolean;
  };
}

// maybe change this so we are only adding one style "is-open"
// move the css below into that css style definition
const Card: React.FC<CardProps> = ({ cardData }) => {
  const [showModal, setShowModal] = useState(false);
  // const [dataToPass, setDataToPass] = useState(ModalContent);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="card relative mx-auto my-2.5 overflow-hidden border-[10px] border-solid border-neutral-600 text-center shadow-[1px_2px_5px_rgba(0,0,0,1)]">
      <img
        src={cardData.imageSrc}
        className="cardImg relative scale-y-100 transition-all duration-700 ease-in-out hover:scale-[10] hover:opacity-0"
      />
      <div className="mask absolute left-0 top-0 overflow-hidden bg-yellow-50/30 text-neutral-800 opacity-0 transition-all duration-500 ease-linear">
        <h2 className="title relative mx-10 mb-0 mt-5 bg-transparent p-2.5 text-center text-base font-semibold uppercase leading-tight opacity-0">
          {cardData.title}
        </h2>

        {!cardData.modal && <p className="px-4 pt-4">{cardData.fulltitle}</p>}

        {cardData.modal && <p className="client relative mb-5 px-5 pb-5 pt-2.5 text-center text-xs italic opacity-0">Client:{cardData.client}</p>}

        {cardData.modal && (
          <button
            className="readmore inline-block cursor-pointer bg-black px-4 py-2 uppercase text-white no-underline hover:bg-slate-600"
            onClick={handleOpenModal}
          >
            Read More
          </button>
        )}
      </div>
      <Modal data={cardData} onClose={handleCloseModal} isOpen={showModal} />
    </div>
  );
};

// Create component that uses CardData and formats how the modal data should look UX. Then that component div will be passed in as data

export default Card;
