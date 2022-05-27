import React from 'react';
import './search-bar.scss';

type SearchBarPropr = {
  searchValue: string;
  setSearchValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

class SearchBar extends React.Component<SearchBarPropr> {
  render() {
    const { searchValue, setSearchValue } = this.props;
    return (
      <div className="search-bar">
        <input value={searchValue} placeholder={'search'} onChange={setSearchValue} />
      </div>
    );
  }
}

export default SearchBar;
