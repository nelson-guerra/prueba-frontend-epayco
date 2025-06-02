export const PostListLoadingAtom = () => {
   return (
      <div role="status" className="animate-pulse">
         <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
         <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-3"></div>
         <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-3"></div>
         <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-3"></div>
         <span className="sr-only">Loading...</span>
      </div>
   );
};
