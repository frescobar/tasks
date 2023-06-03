import { combineReducers, configureStore } from '@reduxjs/toolkit';
import tasksSlice from './tasksSlice';
const rootReducer = combineReducers({
  tasks: tasksSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
  reducer: rootReducer,
});

export default store;
