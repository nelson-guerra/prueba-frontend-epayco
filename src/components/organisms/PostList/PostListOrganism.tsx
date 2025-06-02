import { usePost } from "../../../hooks/post/usePost";
import { Post } from "../../../types";
import { PostListLoadingAtom } from "../../atoms/Loading/PostListLoadingAtom";
import { PostItemMolecule } from "../../molecules/PostItem/PostItemMolecule";

export const PostListOrganism = () => {
   const { data, error, isLoading } = usePost<Post>();

   if (error) return <div>Error: {error.message}</div>;

   return (
      <>
         <div className="sm:mx-auto sm:w-full sm:max-w-sm mb-2">
            <h2 className="text-center text-2xl/9 font-bold tracking-tight text-gray-900">
               Items List
            </h2>
         </div>
         {isLoading && <PostListLoadingAtom />}
         <div className="divide-y divide-gray-200">
            {data &&
               data.map((item: Post) => (
                  <PostItemMolecule key={item.id} item={item} />
               ))}
         </div>
      </>
   );
};
