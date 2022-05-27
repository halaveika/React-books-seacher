import React, { Dispatch } from 'react';
import { viewReducer, IViewState } from './reducers/view-reducer';
import { ViewAction } from './actions-types';
import { PAGE_SIZE_ARR, FILTER_ARR } from '../common/constants';

export const initialState: IViewState = {
  cards: [],
  searchValue: '',
  order: FILTER_ARR[0],
  totalCount: 0,
  page: 0,
  pageSize: PAGE_SIZE_ARR[0],
  details: null,
};
const store = React.createContext<{
  state: IViewState;
  dispatch: Dispatch<ViewAction>;
}>({
  state: initialState,
  dispatch: () => null,
});

const StateProvider: React.FC = ({ children }) => {
  const [state, dispatch] = React.useReducer(viewReducer, initialState);
  return <store.Provider value={{ state, dispatch }}>{children}</store.Provider>;
};

const useStoreContext = () => React.useContext(store);

export { useStoreContext, StateProvider };
