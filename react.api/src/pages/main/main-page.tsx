import React from 'react';
import CardList from '../../components/card-list';
import Header from '../../components/header';
import SearchBar from '../../components/search-bar';
import { SEARCH_VALUE_LOCALSTORAGE } from '../../common/constants';
import './main-page.scss';
import HtttpService from '../../modules/api/http-service';
import { searchResponseType, itemsType } from '../../common/types/searchResponse';
import Spinner from '../../components/spinner';

type MainPageProps = {
  title: string;
};

type MainPageState = {
  searchValue: string;
  fetchedData: itemsType[];
  isLoading: boolean;
};

class MainPage extends React.Component<MainPageProps, MainPageState> {
  state: MainPageState = {
    searchValue: localStorage.getItem(SEARCH_VALUE_LOCALSTORAGE) || '',
    fetchedData: [],
    isLoading: false,
  };

  setSearchValue = (e: React.ChangeEvent<HTMLInputElement>) =>
    this.setState((prevState) => ({ ...prevState, searchValue: e.target.value }));

  submitSearchValue = async (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      this.setState((prevState) => ({ ...prevState, isLoading: true }));
      const response = (await HtttpService.searchBooksRequest(
        this.state.searchValue
      )) as searchResponseType;
      if (response) {
        this.setState((prevState) => ({ ...prevState, fetchedData: response.items }));
      }
      this.setState((prevState) => ({ ...prevState, isLoading: false }));
    }
  };

  componentWillUnmount = () =>
    localStorage.setItem(SEARCH_VALUE_LOCALSTORAGE, this.state.searchValue);

  render() {
    return (
      <>
        <Header title={this.props.title}></Header>
        <main className="main container">
          <div className="content">
            <SearchBar
              searchValue={this.state.searchValue}
              submitSearchValue={this.submitSearchValue}
              setSearchValue={this.setSearchValue}
            ></SearchBar>
            {this.state.isLoading ? (
              <Spinner></Spinner>
            ) : (
              <CardList fetchedData={this.state.fetchedData || []}></CardList>
            )}
          </div>
        </main>
      </>
    );
  }
}

export default MainPage;
