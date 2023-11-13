import { Component } from 'react';
import { Item } from './imageGalleryItem.styled';
import { GalleryModal } from './Modal';

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
          <GalleryModal
            tags={tags}
            largeImgUrl={largeImgUrl}
            isOpen={this.openModal}
            isClose={this.closeModal}
          />
        )}
      </Item>
    );
  }
}
