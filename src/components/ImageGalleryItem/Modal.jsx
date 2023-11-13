import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    border: 'none',
    backgroundColor: 'transparent',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.707)',
    zIndex: 1001,
  },
};

Modal.setAppElement('#root');

export const GalleryModal = ({ tags, largeImgUrl, isOpen, isClose }) => {
  return (
    <Modal
      isOpen={true}
      onRequestClose={isClose}
      style={customStyles}
      contentLabel={tags}
    >
      <img
        src={largeImgUrl}
        alt={tags}
        loading="lazy"
        style={{ maxWidth: '850px', height: 'auto' }}
      ></img>
    </Modal>
  );
};
