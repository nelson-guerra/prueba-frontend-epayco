import { PostFormOrganism } from "../../components/organisms/PostForm/PostFormOrganism";
import { PostTemplate } from "../../components/templates/Post/PostTemplate";
import { PostListOrganism } from "../../components/organisms/PostList/PostListOrganism";
//import { PostContextProvider } from "../../contex/PostContextProvider";

export const PostPage = () => {
   return (
      <PostTemplate>
         <PostFormOrganism />
         <PostListOrganism />
      </PostTemplate>
   );
};
