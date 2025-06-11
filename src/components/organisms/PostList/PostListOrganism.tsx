import { Post } from "../../../types";
import { PostListLoadingAtom } from "../../atoms/Loading/PostListLoadingAtom";
import { PostItemMolecule } from "../../molecules/PostItem/PostItemMolecule";

type Props = {
   data?: Post[];
   status: string;
   error: string | null;
};

export const PostListOrganism = ({ data, error, status }: Props) => {
   if (status === "rejected") return <div>Error: {error}</div>;

   return (
      <>
         <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="text-center text-2xl font-bold text-gray-900">
               Items List
            </h2>
         </div>
         {status == "pending" && <PostListLoadingAtom />}
         <div className="divide-y divide-gray-200">
            {data &&
               data.map((item: Post) => (
                  <PostItemMolecule key={item.id} item={item} />
               ))}
         </div>
      </>
   );
};
