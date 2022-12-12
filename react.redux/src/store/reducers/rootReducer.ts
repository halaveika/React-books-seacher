import { combineReducers } from '@reduxjs/toolkit';

import viewReducer from '../features/view/viewSlice';

const rootReducer = combineReducers({
  view: viewReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
