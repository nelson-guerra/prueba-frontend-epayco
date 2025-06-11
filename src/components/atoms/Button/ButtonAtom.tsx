type Props = {
   children: string | React.ReactNode;
} & Omit<React.ComponentProps<"button">, "children">;

export const ButtonAtom = ({ children, ...rest }: Props) => {
   return (
      <button
         {...rest}
         className="w-full rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 cursor-pointer"
      >
         {children}
      </button>
   );
};
