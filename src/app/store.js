import { configureStore } from '@reduxjs/toolkit';
import subRedditsReducer from '../features/slices/subReddits/subRedditSlice';
import activeRedditPostsReducer from '../features/slices/postsSlice/postsSlice';

export const store = configureStore({
  reducer: {
    allSubReddits: subRedditsReducer,
    activeRedditPosts: activeRedditPostsReducer
  },
});
