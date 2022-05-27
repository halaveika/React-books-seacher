import React from 'react';
import './search-bar.scss';

type SearchBarPropr = {
  searchValue: string;
  setSearchValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
  submitSearchValue: (e: React.KeyboardEvent) => void;
};

class SearchBar extends React.Component<SearchBarPropr> {
  render() {
    const { searchValue, setSearchValue, submitSearchValue } = this.props;
    return (
      <div className="search-bar">
        <input
          value={searchValue}
          placeholder={'search'}
          onKeyDown={submitSearchValue}
          onChange={setSearchValue}
        />
      </div>
    );
  }
}

export default SearchBar;
