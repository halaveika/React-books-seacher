import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PAGE_SIZE_ARR, FILTER_ARR } from '../../../common/constants';
import CardType from '../../../common/types/card';
import DetailsType from '../../../common/types/details';

interface IViewState {
  cards: CardType[];
  searchValue: string;
  order: string;
  totalCount: number;
  page: number;
  pageSize: number;
  details: null | DetailsType;
}

const initialState: IViewState = {
  cards: [],
  searchValue: '',
  order: FILTER_ARR[0],
  totalCount: 0,
  page: 0,
  pageSize: PAGE_SIZE_ARR[0],
  details: null,
};

const viewSlice = createSlice({
  name: 'view',
  initialState,
  reducers: {
    getCards(state: IViewState, action: PayloadAction<CardType[]>): void {
      state.cards = action.payload;
    },
    setOrder(state: IViewState, action: PayloadAction<string>): void {
      state.order = action.payload;
    },
    setSearchValue(state: IViewState, action: PayloadAction<string>): void {
      state.searchValue = action.payload;
    },
    setTotalCount(state: IViewState, action: PayloadAction<number>): void {
      state.totalCount = action.payload;
    },
    setPage(state: IViewState, action: PayloadAction<number>): void {
      state.page = action.payload;
    },
    setPageSize(state: IViewState, action: PayloadAction<number>): void {
      state.pageSize = action.payload;
    },
    setDetailsPage(state: IViewState, action: PayloadAction<DetailsType | null>): void {
      state.details = action.payload;
    },
  },
});

export const {
  getCards,
  setOrder,
  setSearchValue,
  setTotalCount,
  setPage,
  setPageSize,
  setDetailsPage,
} = viewSlice.actions;

export default viewSlice.reducer;
