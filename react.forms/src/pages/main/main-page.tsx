import React from 'react';
import CardList from '../../components/card-list';
import Header from '../../components/header';
import SearchBar from '../../components/search-bar';
import { SEARCH_VALUE_LOCALSTORAGE } from '../../common/constants';
import './main-page.scss';

type MainPageProps = {
  title: string;
};

type MainPageState = {
  searchValue: string;
};

class MainPage extends React.Component<MainPageProps, MainPageState> {
  state: MainPageState = {
    searchValue: localStorage.getItem(SEARCH_VALUE_LOCALSTORAGE) || '',
  };

  setSearchValue = (e: React.ChangeEvent<HTMLInputElement>) =>
    this.setState(() => ({ searchValue: e.target.value }));

  componentWillUnmount() {
    localStorage.setItem(SEARCH_VALUE_LOCALSTORAGE, this.state.searchValue);
  }

  render() {
    return (
      <>
        <Header title={this.props.title}></Header>
        <main className="main container">
          <div className="content">
            <SearchBar
              searchValue={this.state.searchValue}
              setSearchValue={this.setSearchValue}
            ></SearchBar>
            <CardList searchValue={this.state.searchValue}></CardList>
          </div>
        </main>
      </>
    );
  }
}

export default MainPage;
