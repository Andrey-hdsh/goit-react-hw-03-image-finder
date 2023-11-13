import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { List } from './imageGallery.styled';
export const ImageGallery = ({ hits }) => {
  return (
    <List>
            {hits &&
        hits.map(hit => (
          <ImageGalleryItem
            key={hit.id}
            imageUrl={hit.webformatURL}
            tags={hit.tags}
            largeImgUrl={hit.largeImageURL}
          />
        ))}
</List>
  );
};
