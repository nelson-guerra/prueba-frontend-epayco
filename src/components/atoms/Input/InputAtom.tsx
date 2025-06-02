import { Path, UseFormRegister, FieldErrors } from "react-hook-form";
import { Post } from "../../../types/index";

type Props = {
   errors: FieldErrors<Post>;
   label: Path<Post>;
   register: UseFormRegister<Post>;
   required: boolean;
};

export const InputAtom = ({ errors, label, register, required }: Props) => {
   return (
      <>
         <input {...register(label, { required })} />
         <div>{errors[label]?.message}</div>
      </>
   );
};
