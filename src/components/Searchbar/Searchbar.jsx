import { Header } from './Searchbar.styled';
import { FaSistrix } from 'react-icons/fa';

export const Searchbar = ({ onSubmit }) => {
  const handleSubmit = evt => {
    evt.preventDefault();
    const targetQuery = evt.target.query.value;

    if (targetQuery.trim() !== '') {
      onSubmit(targetQuery);
    }
    evt.target.query.value = '';
  };

  return (
    <Header>
      <form onSubmit={handleSubmit}>
        <button type="submit">
          <FaSistrix />
        </button>

        <input
          name="query"
          type="text"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </Header>
  );
};
