import { useForm } from "react-hook-form";
import { useAddPost } from "../../../hooks/post/useAddPost";
import { Post } from "../../../types/index";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { InputAtom } from "../../atoms/Input/InputAtom";
import { TextAreaAtom } from "../../atoms/TextArea/TextAreaAtom";
import { ButtonAtom } from "../../atoms/Button/ButtonAtom";

const schema = yup
   .object({
      title: yup.string().required("Ingrese un título"),
      body: yup.string().required("Ingrese una descripción"),
   })
   .required();

export const PostFormOrganism = () => {
   const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
   } = useForm<Post>({
      resolver: yupResolver(schema),
   });

   const mutation = useAddPost<Post>();

   const onSubmit = (data: Post) => {
      //console.log(data);
      mutation.addPost({
         title: data.title,
         body: data.body,
      });
      reset();
   };

   return (
      <>
         <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
               <h2 className="text-center text-2xl/9 font-bold tracking-tight text-gray-900">
                  New Item
               </h2>
            </div>
            <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
               <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="mb-1">
                     <label className="block text-sm/6 font-medium text-gray-900">
                        Título
                     </label>
                     <div className="mt-2">
                        <InputAtom
                           errors={errors}
                           label="title"
                           register={register}
                           required
                        />
                     </div>
                  </div>
                  <div className="mb-1">
                     <label className="block text-sm/6 font-medium text-gray-900">
                        Descripción
                     </label>
                     <div className="mt-2">
                        <TextAreaAtom
                           errors={errors}
                           label="body"
                           register={register}
                           required
                        />
                     </div>
                  </div>
                  <div className="mt-4">
                     <ButtonAtom type="submit">Add Item</ButtonAtom>
                  </div>
               </form>
            </div>
         </div>
      </>
   );
};
