import { Component } from 'react';
import Modal from 'react-modal';
import { Item } from './imageGalleryItem.styled';

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
  },
};

Modal.setAppElement('#root');

export class ImageGalleryItem extends Component {
    state = {
        isModalOpen: false,
    };
    
  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  closeModal = evt => {
    evt.stopPropagation();
    this.setState({ isModalOpen: false });
  };

  render() {
    const { imageUrl, tags, largeImgUrl } = this.props;

    return (
          <Item onClick={this.openModal}>
            <img
              src={imageUrl}
              alt={tags}
              loading="lazy"
              width="350px"
              height="200px"
            ></img>
            {this.state.isModalOpen && (
              <Modal
                isOpen={this.state.isModalOpen}
                onRequestClose={this.closeModal}
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
            )}
          </Item>
    );
  }
}

// document.body.style.overflow = 'hidden';
//  document.body.style.overflow = 'scroll'