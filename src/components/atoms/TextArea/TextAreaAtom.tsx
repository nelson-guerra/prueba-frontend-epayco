import { Path, UseFormRegister } from "react-hook-form";
import { Post } from "../../../types/index";

type Props = {
   label: Path<Post>;
   register: UseFormRegister<Post>;
   required: boolean;
};

export const TextAreaAtom = ({ label, register, required }: Props) => {
   return (
      <>
         <textarea rows={4} {...register(label, { required })} />
      </>
   );
};
