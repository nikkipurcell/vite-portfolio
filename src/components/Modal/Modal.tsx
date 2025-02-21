import './Modal.css';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: {
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

const Modal: React.FC<ModalProps> = ({ data, onClose, isOpen }) => {
  return (
    <div
      id="dialog"
      className={`modal ${isOpen ? 'is-open' : ''} fixed left-0 top-0 z-10 h-screen w-screen bg-black transition-opacity duration-500`}
      onClick={onClose}
    >
      <div className="w- mx-auto my-20 rounded bg-white px-8 pb-8 pt-6 text-left shadow-md transition-none lg:w-1/2">
        <h3 className="pb-4 text-center text-lg font-bold">{data.fulltitle}</h3>
        <div className="lg:grid-col-1 text-sm lg:grid lg:grid-cols-2 lg:gap-4 lg:pb-6">
          <img className="m-auto" src={data.imageBigSrc} alt={data.title} />
          <div className="p-2 font-bold">
            <p className="pb-2">
              Client: <span className="font-normal">{data.client}</span>
            </p>
            <p className="pb-2">
              My Role: <span className="font-normal">{data.role}</span>
            </p>
            <p className="pb-2">
              Technologies Used: <span className="font-normal">{data.technologies.map(item => `${item}, `)}</span>
            </p>
            <p>
              Project Brief: <span className="font-normal">{data.brief}</span>
            </p>
          </div>
        </div>
        <p className="p-2 text-base font-bold lg:p-0">
          Solution: <span className="font-normal">{data.solution}</span>
        </p>
        <div className="mt-5 flex justify-center gap-4">
          <button className="rounded border border-gray-300 bg-gray-100 px-6 py-2 text-black hover:bg-gray-200" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
