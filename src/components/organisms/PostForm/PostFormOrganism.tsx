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
         <div>
            <h2>New Item</h2>
         </div>
         <div>
            <form onSubmit={handleSubmit(onSubmit)}>
               <div>
                  <label>Título</label>
                  <div>
                     <InputAtom
                        errors={errors}
                        label="title"
                        register={register}
                        required
                     />
                  </div>
               </div>
               <div>
                  <label>Descripción</label>
                  <div>
                     <TextAreaAtom
                        errors={errors}
                        label="body"
                        register={register}
                        required
                     />
                  </div>
               </div>
               <div>
                  <ButtonAtom type="submit">Add Item</ButtonAtom>
               </div>
            </form>
         </div>
      </>
   );
};
