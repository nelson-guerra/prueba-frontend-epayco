import { useEffect } from "react";
import { Post } from "../../../types";
import { PostListLoadingAtom } from "../../atoms/Loading/PostListLoadingAtom";
import { PostItemMolecule } from "../../molecules/PostItem/PostItemMolecule";
import { useAppSelector, useAppDispatch } from "../../../redux/hooks";
import { fetchPostsAsync } from "../../../redux/states/post";

export const PostListOrganism = () => {
   const dispatch = useAppDispatch();
   const {
      posts: data,
      loading,
      error,
   } = useAppSelector((state) => state.post);

   useEffect(() => {
      dispatch(fetchPostsAsync());
   }, [dispatch]);

   if (error) return <div>Error: {error}</div>;

   return (
      <>
         <div className="sm:mx-auto sm:w-full sm:max-w-sm mb-2">
            <h2 className="text-center text-2xl/9 font-bold tracking-tight text-gray-900">
               Items List
            </h2>
         </div>
         {loading && <PostListLoadingAtom />}
         <div className="divide-y divide-gray-200">
            {data &&
               data.map((item: Post) => (
                  <PostItemMolecule key={item.id} item={item} />
               ))}
         </div>
      </>
   );
};
