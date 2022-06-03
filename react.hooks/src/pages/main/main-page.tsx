import React from 'react';
import CardList from '../../components/card-list';
import Header from '../../components/header';
import SearchBar from '../../components/search-bar';
import { SEARCH_VALUE_LOCALSTORAGE } from '../../common/constants';
import './main-page.scss';
import HtttpService from '../../modules/api/http-service';
import { searchResponseType } from '../../common/types/searchResponse';
import Spinner from '../../components/spinner';
import CardType from '../../common/types/card';
import { getErrorMessage, reportError } from '../../common/helper';

type MainPageProps = {
  title: string;
};

type MainPageState = {
  searchValue: string;
  cards: CardType[];
  isLoading: boolean;
};

const MainPage = (props: MainPageProps): JSX.Element => {
  const [state, setState] = React.useState<MainPageState>({
    searchValue: localStorage.getItem(SEARCH_VALUE_LOCALSTORAGE) || '',
    cards: [],
    isLoading: false,
  });

  React.useEffect(() => {
    return () => {
      localStorage.setItem(SEARCH_VALUE_LOCALSTORAGE, state.searchValue);
    };
  }, [state.searchValue]);

  const setSearchValue = (e: React.ChangeEvent<HTMLInputElement>) =>
    setState((prevState) => ({ ...prevState, searchValue: e.target.value }));

  const submitSearchValue = async (e: React.KeyboardEvent) => {
    try {
      if (e.key === 'Enter') {
        setState((prevState) => ({ ...prevState, isLoading: true }));
        const response = (await HtttpService.searchBooksRequest(
          state.searchValue
        )) as searchResponseType;
        if (response) {
          const cards = response.items.map((e) => ({
            id: e.id,
            title: e.volumeInfo.title,
            authors: e.volumeInfo.authors,
            averageRating: e.volumeInfo.averageRating,
            imageLinks: e.volumeInfo.imageLinks,
            description: e.volumeInfo.description,
            categories: e.volumeInfo.categories,
            language: e.volumeInfo.language,
            pageCount: e.volumeInfo.pageCount,
            printType: e.volumeInfo.printType,
            publishedDate: e.volumeInfo.publishedDate,
            publisher: e.volumeInfo.publisher,
            ratingsCount: e.volumeInfo.ratingsCount,
            subtitle: e.volumeInfo.subtitle,
          }));
          setState((prevState) => ({ ...prevState, cards }));
        }
        setState((prevState) => ({ ...prevState, isLoading: false }));
      }
    } catch (error) {
      reportError({ message: getErrorMessage(error) });
    }
  };

  return (
    <>
      <Header title={props.title}></Header>
      <main className="main container">
        <div className="content">
          <SearchBar
            searchValue={state.searchValue}
            submitSearchValue={submitSearchValue}
            setSearchValue={setSearchValue}
          ></SearchBar>
          {state.isLoading ? <Spinner></Spinner> : <CardList cards={state.cards || []}></CardList>}
        </div>
      </main>
    </>
  );
};

export default MainPage;
