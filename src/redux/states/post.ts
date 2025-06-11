import { Post } from '../../types/index';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { postService } from '../../services/post.service';

export const fetchPostsAsync = createAsyncThunk('post/fetchPosts', async () => {
   const controller = new AbortController();
   const response = await postService.getAllPost({
      signal: controller.signal,
   });

   return response.reverse();
});

export const PostEmptyState: {
   posts: Post[];
   status: 'idle' | 'pending' | 'succeeded' | 'rejected';
   error: string | null;
} = {
   posts: [],
   status: 'idle',
   error: null,
};

export const postSlice = createSlice({
   name: 'post',
   initialState: PostEmptyState,
   reducers: {
      addNewPost: (state, action) => {
         state.posts.unshift(action.payload);
      },
      resetPost: () => PostEmptyState,
   },
   extraReducers: (builder) => {
      builder
         .addCase(fetchPostsAsync.pending, (state) => {
            state.status = 'pending';
         })
         .addCase(fetchPostsAsync.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.posts = action.payload;
         })
         .addCase(fetchPostsAsync.rejected, (state, action) => {
            state.status = 'rejected';
            state.error = action.error.message ?? null;
         });
   },
});

export const postReducer = postSlice.reducer;
export const { addNewPost, resetPost } = postSlice.actions;
