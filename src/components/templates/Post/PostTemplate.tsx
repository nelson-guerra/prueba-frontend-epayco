import { ReactNode } from "react";

export const PostTemplate = ({ children }: { children?: ReactNode }) => {
   return <div className="mx-auto max-w-4xl sm:py-6 py-0 px-6">{children}</div>;
};
