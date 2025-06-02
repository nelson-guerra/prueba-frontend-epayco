import { Post } from "../../../types";

export const PostItemMolecule = ({ item }: { item: Post }) => {
   return (
      <div>
         <p>{item.title}</p>
         <p>{item.body}</p>
      </div>
   );
};
