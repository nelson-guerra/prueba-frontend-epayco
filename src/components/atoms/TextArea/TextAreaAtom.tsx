import { Path, UseFormRegister, FieldErrors } from "react-hook-form";
import { Post } from "../../../types/index";

type Props = {
   errors: FieldErrors<Post>;
   label: Path<Post>;
   register: UseFormRegister<Post>;
   required: boolean;
};

export const TextAreaAtom = ({ errors, label, register, required }: Props) => {
   return (
      <>
         <textarea
            rows={1}
            cols={30}
            {...register(label, { required })}
            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
         />
         <div className="w-full h-5 text-xs mt-1 text-blue-800">
            {errors[label]?.message}
         </div>
      </>
   );
};
