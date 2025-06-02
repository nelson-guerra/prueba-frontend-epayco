import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PostPage } from "./pages/post/PostPage";

const queryClient = new QueryClient();

export const App = () => {
   return (
      <QueryClientProvider client={queryClient}>
         <PostPage />
      </QueryClientProvider>
   );
};
