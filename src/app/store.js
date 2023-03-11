import { configureStore } from '@reduxjs/toolkit';
import subRedditsReducer from '../features/slices/subReddits/subRedditSlice';

export const store = configureStore({
  reducer: {
    allSubReddits: subRedditsReducer,
  },
});
