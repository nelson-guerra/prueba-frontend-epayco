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
   loading: boolean;
   error: string;
} = {
   posts: [],
   loading: false,
   error: '',
};

export const postSlice = createSlice({
   name: 'post',
   initialState: PostEmptyState,
   reducers: {
      addPost: (state, action) => {
         state.posts.unshift(action.payload);
      },
      resetPost: () => PostEmptyState,
   },
   extraReducers: (builder) => {
      builder
         .addCase(fetchPostsAsync.pending, (state) => {
            state.loading = true;
         })
         .addCase(fetchPostsAsync.fulfilled, (state, action) => {
            state.loading = false;
            state.posts = action.payload;
         })
         .addCase(fetchPostsAsync.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message || 'Falló la carga de datos';
         });
   },
});

export const postReducer = postSlice.reducer;
export const { addPost, resetPost } = postSlice.actions;
