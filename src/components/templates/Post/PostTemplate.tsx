import { ReactNode } from "react";

export const PostTemplate = ({ children }: { children?: ReactNode }) => {
   return (
      <main>
         <div className="mx-auto max-w-4xl px-4 py-6 sm:px-6 lg:px-8">
            {children}
         </div>
      </main>
   );
};
