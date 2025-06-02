import { usePost } from "../../../hooks/post/usePost";
import { Post } from "../../../types";
import { PostItemMolecule } from "../../molecules/PostItem/PostItemMolecule";

export const PostListOrganism = () => {
   const { data, error } = usePost<Post>();

   if (error) return <div>Error: {error.message}</div>;

   return (
      <>
         <div>
            <h2>Items List</h2>
         </div>
         <div>
            {data &&
               data.map((item: Post) => (
                  <PostItemMolecule key={item.id} item={item} />
               ))}
         </div>
      </>
   );
};
