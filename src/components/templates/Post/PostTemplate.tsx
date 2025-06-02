import { ReactNode } from "react";

export const PostTemplate = ({ children }: { children?: ReactNode }) => {
   return (
      <main>
         <div>{children}</div>
      </main>
   );
};
