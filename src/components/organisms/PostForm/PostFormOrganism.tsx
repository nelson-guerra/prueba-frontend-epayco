import { useForm } from "react-hook-form";
import { useAppDispatch } from "../../../redux/hooks";
import { addPost } from "../../../redux/states/post";
import { Post } from "../../../types/index";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { InputAtom } from "../../atoms/Input/InputAtom";
import { TextAreaAtom } from "../../atoms/TextArea/TextAreaAtom";
import { ButtonAtom } from "../../atoms/Button/ButtonAtom";

const schema = yup
   .object({
      title: yup.string().required("Title is required"),
      body: yup.string().required("Description is required"),
   })
   .required();

export const PostFormOrganism = () => {
   const dispatch = useAppDispatch();

   const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
   } = useForm<Post>({
      resolver: yupResolver(schema),
   });

   const onSubmit = (data: Post) => {
      dispatch(
         addPost({
            id: Math.floor(Math.random() * (1000 - 100) + 100),
            title: data.title,
            body: data.body,
         })
      );
      reset();
   };

   return (
      <>
         <div className="flex min-h-full flex-col pt-6 pb-12">
            <h2 className="text-center text-2xl/9 font-bold tracking-tight text-gray-900">
               New Item
            </h2>
            <div className="mt-2 sm:mt-6 sm:mx-auto">
               <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="flex sm:flex-row flex-col space-y-6 gap-x-2"
               >
                  <div className="mb-0">
                     <label className="block text-sm/6 font-medium text-gray-900">
                        Title
                     </label>
                     <div className="mt-1">
                        <InputAtom
                           errors={errors}
                           label="title"
                           register={register}
                           required
                        />
                     </div>
                  </div>
                  <div className="mb-0">
                     <label className="block text-sm/6 font-medium text-gray-900">
                        Description
                     </label>
                     <div className="mt-1">
                        <TextAreaAtom
                           errors={errors}
                           label="body"
                           register={register}
                           required
                        />
                     </div>
                  </div>
                  <div className="flex items-center mt-4 sm:mt-1.5 flex-none">
                     <ButtonAtom type="submit">Add Item</ButtonAtom>
                  </div>
               </form>
            </div>
         </div>
      </>
   );
};
