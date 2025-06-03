import { configureStore } from '@reduxjs/toolkit';
import { postReducer } from './states/post';

export const configStore = configureStore({
   reducer: {
      post: postReducer,
   },
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ serializableCheck: false }),
});

export type RootState = ReturnType<typeof configStore.getState>;
export type AppDispatch = typeof configStore.dispatch;
