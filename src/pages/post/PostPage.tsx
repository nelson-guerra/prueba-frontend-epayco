import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { fetchPostsAsync, addNewPost } from "../../redux/states/post";
import { PostFormOrganism } from "../../components/organisms/PostForm/PostFormOrganism";
import { PostTemplate } from "../../components/templates/Post/PostTemplate";
import { PostListOrganism } from "../../components/organisms/PostList/PostListOrganism";
import { Post } from "../../types";

export const PostPage = () => {
   const dispatch = useAppDispatch();

   useEffect(() => {
      dispatch(fetchPostsAsync());
   }, [dispatch]);

   const { posts, status, error } = useAppSelector((state) => state.post);

   const handleAddNewPost = async (post: Post) => {
      dispatch(addNewPost(post));
   };

   return (
      <PostTemplate>
         <PostFormOrganism handleAddNewPost={handleAddNewPost} />
         <PostListOrganism data={posts} status={status} error={error} />
      </PostTemplate>
   );
};
