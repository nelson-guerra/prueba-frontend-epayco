type Props = {
   children: string | React.ReactNode;
} & Omit<React.ComponentProps<"button">, "children">;

export const ButtonAtom = ({ children, ...rest }: Props) => {
   return <button {...rest}>{children}</button>;
};
