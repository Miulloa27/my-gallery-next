
const ImageModal = ({ src, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" onClick={onClose}>
      <div className="relative max-w-3xl max-h-full p-4" onClick={(e) => e.stopPropagation()}>
        <img src={src} alt="Selected" className="w-full h-auto rounded-lg shadow-lg" />
        <button
          className="absolute top-4 right-4 text-white text-3xl font-bold focus:outline-none"
          onClick={onClose}
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default ImageModal;
