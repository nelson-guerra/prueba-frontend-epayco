import { Post } from "../../../types";

export const PostItemMolecule = ({ item }: { item: Post }) => {
   return (
      <div className="flex gap-x-6 py-5">
         <div className="flex min-w-0 gap-x-4">
            <div className="min-w-0 flex-auto">
               <p className="text-sm font-semibold text-gray-900">
                  {item.title}
               </p>
               <p className="mt-1 text-xs text-gray-500">{item.body}</p>
            </div>
         </div>
      </div>
   );
};
