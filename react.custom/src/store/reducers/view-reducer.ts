import { ViewAction, ViewActionTypes } from '../actions-types';
import CardType from '../../common/types/card';
import DetailsType from '../../common/types/details';

export interface IViewState {
  cards: CardType[];
  searchValue: string;
  order: string;
  totalCount: number;
  page: number;
  pageSize: number;
  details: null | DetailsType;
}

export const viewReducer = (state: IViewState, action: ViewAction) => {
  switch (action.type) {
    case ViewActionTypes.GET_CARDS:
      return {
        ...state,
        cards: action.payload,
      };
    case ViewActionTypes.SET_SEARCH_VALUE:
      return {
        ...state,
        searchValue: action.payload,
      };
    case ViewActionTypes.SET_ORDER:
      return {
        ...state,
        order: action.payload,
      };
    case ViewActionTypes.SET_TOTAL_COUNT:
      return {
        ...state,
        totalCount: action.payload,
      };
    case ViewActionTypes.SET_PAGE:
      return {
        ...state,
        page: action.payload > 0 ? action.payload : 0,
      };
    case ViewActionTypes.SET_PAGE_SIZE:
      return {
        ...state,
        pageSize: action.payload,
      };
    case ViewActionTypes.SET_DETAILS_PAGE:
      return {
        ...state,
        details: action.payload,
      };
    default:
      return state;
  }
};
