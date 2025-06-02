import { useQuery } from '@tanstack/react-query';
import { postService } from '../../services/post.service';

export const usePost = <T>() => {
   return useQuery<T[]>({
      queryKey: ['post'],
      queryFn: ({ signal }) => postService.getAllPost({ signal }),
      select: (data) => data.reverse(),
   });
};
