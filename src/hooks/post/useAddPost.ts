import { useMutation, useQueryClient } from '@tanstack/react-query';
import { postService } from '../../services/post.service';

export const useAddPost = <T>() => {
   const queryClient = useQueryClient();

   const { isPending, mutateAsync } = useMutation({
      mutationFn: (params: T) => {
         console.log(params);
         return postService.addPost<T>(params);
      },
      onSuccess: (data: T) => {
         console.log(data);
         queryClient.invalidateQueries({ queryKey: ['post'] });
      },
   });

   return { isAdding: isPending, addPost: mutateAsync };
};
