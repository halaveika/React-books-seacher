import CardType from '../common/types/card';
import DetailsType from '../common/types/details';

export enum ViewActionTypes {
  GET_CARDS = 'VIEW/GET_CARDS',
  SET_TOTAL_COUNT = 'VIEW/SET_TOTAL_COUNT',
  SET_SEARCH_VALUE = 'VIEW/SEARCH_VALUE',
  SET_ORDER = 'VIEW/SET_ORDER',
  SET_PAGE = 'VIEW/SET_PAGE',
  SET_PAGE_SIZE = 'VIEW/SET_PAGE_SIZE',
  SET_DETAILS_PAGE = 'VIEW/SET_DETAILS_PAGE',
}

export interface GetCards {
  type: ViewActionTypes.GET_CARDS;
  payload: CardType[];
}

export interface SetSearchValue {
  type: ViewActionTypes.SET_SEARCH_VALUE;
  payload: string;
}

export interface SetOrder {
  type: ViewActionTypes.SET_ORDER;
  payload: string;
}

export interface SetTotalCount {
  type: ViewActionTypes.SET_TOTAL_COUNT;
  payload: number;
}

export interface SetPage {
  type: ViewActionTypes.SET_PAGE;
  payload: number;
}

export interface SetPageSize {
  type: ViewActionTypes.SET_PAGE_SIZE;
  payload: number;
}

export interface SetDetailsPage {
  type: ViewActionTypes.SET_DETAILS_PAGE;
  payload: null | DetailsType;
}

export type ViewAction =
  | GetCards
  | SetSearchValue
  | SetOrder
  | SetTotalCount
  | SetPage
  | SetPageSize
  | SetDetailsPage;
