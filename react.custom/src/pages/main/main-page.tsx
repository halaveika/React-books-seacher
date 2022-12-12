import React from 'react';
import CardList from '../../components/card-list';
import Header from '../../components/header';
import SearchBar from '../../components/search-bar';
import './main-page.scss';
import HtttpService from '../../modules/api/http-service';
import { searchResponseType } from '../../common/types/searchResponse';
import Spinner from '../../components/spinner';
import {
  setSearchValue,
  getCards,
  setOrder,
  setPage,
  setPageSize,
  setTotalCount,
} from '../../store/actions/view-actions';
import { useStoreContext } from '../../store/store';
import Pagination from '../../components/pagination';
import { PAGE_SIZE_ARR, FILTER_ARR } from '../../common/constants';
import { SelectProps } from '../../components/select/select';
import Select from '../../components/select';

type MainPageProps = {
  title: string;
};

const MainPage = (props: MainPageProps): JSX.Element => {
  const { state, dispatch } = useStoreContext();
  const { searchValue, page, pageSize, totalCount, cards, order } = state;
  const [isLoading, setLoading] = React.useState(false);
  const [localSearchValue, setLocalSearchValue] = React.useState(searchValue);

  React.useEffect(() => {
    console.log('main-page useEffect');
    fetchData();
  }, [searchValue, page, pageSize, totalCount, order]);

  const submitSearchValue = async (e: React.KeyboardEvent) => {
    console.log('main-page submitSearchValue');
    if (e.key === 'Enter') {
      console.log('main-page submitSearchValue Enter');
      dispatch(setSearchValue(localSearchValue));
    }
  };

  const fetchData = async () => {
    setLoading(true);
    const response = (await HtttpService.searchBooksRequest(
      state.searchValue,
      state.page,
      state.pageSize
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
      dispatch(setTotalCount(response.totalItems));
      dispatch(getCards(cards));
    }
    setLoading(false);
  };

  const changePage = (page: number) => dispatch(setPage(page - 1));

  const changPageSize = (pageSize: number) => dispatch(setPageSize(pageSize));

  const changOrder = (order: string) => dispatch(setOrder(order));

  const selectPageSize: SelectProps = {
    classname: 'pagesize',
    selectValue: changPageSize as (value: string | number) => void,
    initialValue: pageSize,
    valueArr: PAGE_SIZE_ARR,
  };

  return (
    <>
      <Header title={props.title}></Header>
      <main className="main container">
        <div className="content">
          <div className="search">
            <SearchBar
              searchValue={localSearchValue}
              submitSearchValue={submitSearchValue}
              setSearchValue={setLocalSearchValue}
            ></SearchBar>{' '}
            <Select
              classname="filter"
              selectValue={changOrder as (value: string | number) => void}
              initialValue={order}
              valueArr={FILTER_ARR}
            ></Select>
          </div>

          {isLoading ? (
            <Spinner></Spinner>
          ) : (
            <>
              <CardList cards={state.cards || []}></CardList>
              <Pagination
                onPageChange={changePage}
                totalCount={state.totalCount}
                currentPage={state.page + 1}
                pageSize={state.pageSize}
                selectPageSizeProps={selectPageSize}
              ></Pagination>
            </>
          )}
        </div>
      </main>
    </>
  );
};

export default MainPage;
