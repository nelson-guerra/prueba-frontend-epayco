import { api, httpErrorHandler } from './api';

export const postService = {
   getAllPost: (params: { signal: AbortSignal }) =>
      api
         .get('/posts', params)
         .then((response) => response.data)
         .catch(httpErrorHandler),

   addPost: <T>(params: T) =>
      api
         .post('/posts', params)
         .then((response) => response.data)
         .catch(httpErrorHandler),
};
