import React, { useState } from 'react';
import ImageModal from './ImageModal';

const FileCard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const imageSrc = "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80";

  const handleCardClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="card hover:scale-105 transition-transform duration-500 ease-out cursor-pointer" onClick={handleCardClick}>
        <div className="card-body">
          <img
            alt=""
            src={imageSrc}
            className="h-36 w-full object-cover"
          />
          <p className='text-gray-800 font-semibold'>Results 2023</p>
          <p className='text-[#204780] text-sm font-semibold'>23 files</p>
        </div>
      </div>
      <ImageModal isOpen={isModalOpen} onClose={handleCloseModal} imageSrc={imageSrc} />
    </>
  );
};

export default FileCard;