import { Path, UseFormRegister } from "react-hook-form";
import { Post } from "../../../types/index";

type Props = {
   label: Path<Post>;
   register: UseFormRegister<Post>;
   required: boolean;
};

export const InputAtom = ({ label, register, required }: Props) => {
   return (
      <>
         <input {...register(label, { required })} />
      </>
   );
};
