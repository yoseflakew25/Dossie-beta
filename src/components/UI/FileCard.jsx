import React, { useState } from 'react';
import ImageModal from './ImageModal';

const FileCard = ({ file }) => { // Accept file as a prop
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isImage = file.type === 'image'; // Check if the file is an image
  const isPDF = file.type === 'pdf'; // Check if the file is a PDF

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
          {isImage ? (
            <img
              alt=""
              src={file.src} // Use the src from the file prop
              className="h-36 w-full object-cover"
            />
          ) : isPDF ? (
            <div className="h-36 w-full flex items-center justify-center bg-gray-200">
              <p className="text-gray-800 font-semibold">PDF Document</p>
            </div>
          ) : (
            <div className="h-36 w-full flex items-center justify-center bg-gray-200">
              <p className="text-gray-800 font-semibold">Unsupported File Type</p>
            </div>
          )}
          <p className='text-gray-800 font-semibold'>{file.name}</p> {/* Display file name */}
          <p className='text-[#204780] text-sm font-semibold'>{file.fileCount} files</p> {/* Display number of files */}
        </div>
      </div>
      {isImage && <ImageModal isOpen={isModalOpen} onClose={handleCloseModal} imageSrc={file.src} />}
    </>
  );
};

export default FileCard;