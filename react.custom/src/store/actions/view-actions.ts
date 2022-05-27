import CardType from '../../common/types/card';
import DetailsType from '../../common/types/details';
import { ViewAction, ViewActionTypes } from '../actions-types';

export const getCards = (cards: CardType[]): ViewAction => {
  return {
    type: ViewActionTypes.GET_CARDS,
    payload: cards,
  };
};

export const setOrder = (order: string): ViewAction => {
  return {
    type: ViewActionTypes.SET_ORDER,
    payload: order,
  };
};

export const setSearchValue = (value: string): ViewAction => {
  return {
    type: ViewActionTypes.SET_SEARCH_VALUE,
    payload: value,
  };
};

export const setTotalCount = (result: number): ViewAction => {
  return {
    type: ViewActionTypes.SET_TOTAL_COUNT,
    payload: result,
  };
};

export const setPage = (page: number): ViewAction => {
  console.log(page);
  return {
    type: ViewActionTypes.SET_PAGE,
    payload: page,
  };
};

export const setPageSize = (pageSize: number): ViewAction => {
  return {
    type: ViewActionTypes.SET_PAGE_SIZE,
    payload: pageSize,
  };
};

export const setDetailsPage = (details: DetailsType | null = null): ViewAction => {
  return {
    type: ViewActionTypes.SET_DETAILS_PAGE,
    payload: details,
  };
};
