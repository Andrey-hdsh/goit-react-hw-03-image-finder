import { Component } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Searchbar } from './Searchbar/Searchbar';
import { fetchQuery } from './API';
import { MutatingDots } from 'react-loader-spinner';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './LoadMoreBtn/LoadMoreButton';

export class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
    isLoading: false,
    error: false,
    totalHit: 0,
  };

  handleNewRequest = value => {
    this.setState({
      query: `${Date.now()}/${value}`,
      images: [],
      page: 1,
    });
  };

  handleSabmit = () => {
    this.setState(prevStete => ({
      page: prevStete.page + 1,
    }));
  };

  async componentDidUpdate(prevProps, prevState) {
    if (
      this.state.query !== prevState.query ||
      this.state.page !== prevState.page
    ) {
      try {
        const { query, page } = this.state;
        this.setState({ isLoading: true, error: false });

        const sliceQuery = query.split('/')[1];
        const resultQuery = await fetchQuery(sliceQuery, page);

        this.setState(prevState => ({
          images: [...prevState.images, ...resultQuery.hits],
          totalHit: resultQuery.totalHits,
        }));


        if (resultQuery.hits.length === 0) {
          toast.error(
            'Sorry, there are no photos for this request. Try it differently.'
          );
        }
      } catch (error) {
        this.setState({ error: true });
        toast.error(
          'There was an error with your request, try reloading the page.'
        );
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  render() {
    const { isLoading, images } = this.state;
    const loadingImage = this.state.images.length < this.state.totalHit;

    return (
      <div>
        <Searchbar onSubmit={this.handleNewRequest}></Searchbar>
        {isLoading && (
          <div>
            <MutatingDots
              height="100"
              width="100"
              color="#3d54c9"
              secondaryColor="#3d54c9"
              radius="12.5"
              ariaLabel="mutating-dots-loading"
              wrapperStyle={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
              }}
            />
          </div>
        )}
        {images.length !== 0 && <ImageGallery hits={images} />}
        {loadingImage && !isLoading && <Button click={this.handleSabmit} />}
        <Toaster position="top-right" />
      </div>
    );
  }
}
