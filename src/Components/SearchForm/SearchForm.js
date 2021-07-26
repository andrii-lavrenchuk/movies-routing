import { useState } from 'react';

const SearchForm = ({ onSubmit }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchQueryChange = e => {
    setSearchQuery(e.currentTarget.value.toLowerCase());
  };

  const onSearchButtonClick = e => {
    e.preventDefault();

    if (searchQuery.trim() === '') {
      alert('Enter something');
      return;
    }
    onSubmit(searchQuery);

    setSearchQuery('');
  };

  return (
    <form>
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearchQueryChange}
      />
      <button type="submit" onClick={onSearchButtonClick}>
        Seacrh
      </button>
    </form>
  );
};

export default SearchForm;
