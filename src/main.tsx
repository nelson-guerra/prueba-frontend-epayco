import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { usePost } from "./hooks/post/usePost";
import { useAddPost } from "./hooks/post/useAddPost";

import { useForm } from "react-hook-form";

const Item = ({ item }) => {
   return (
      <div>
         <h3>{item.title}</h3>
         <p>{item.body}</p>
      </div>
   );
};

const ItemList = ({ items }) => {
   return (
      <div>
         {items.map((item) => (
            <Item key={item.id} item={item} />
         ))}
      </div>
   );
};

const Home = () => {
   const { data: items, error, isLoading } = usePost();
   const { register, handleSubmit, reset } = useForm();
   const mutation = useAddPost();

   const onSubmit = (data) => {
      mutation.addPost(data);
      reset();
   };

   if (isLoading) return <div>Loading...</div>;
   if (error) return <div>Error: {error.message}</div>;

   return (
      <div>
         <h1>Add New Item</h1>
         <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("title")} placeholder="Title" required />
            <textarea {...register("body")} placeholder="Body" required />
            <button type="submit">Add Item</button>
         </form>
         <h2>Items List</h2>
         <ItemList items={items} />
      </div>
   );
};

const queryClient = new QueryClient();

const App = () => {
   return (
      <QueryClientProvider client={queryClient}>
         <Home />
      </QueryClientProvider>
   );
};

ReactDOM.createRoot(document.getElementById("root")!).render(
   <React.StrictMode>
      <App />
   </React.StrictMode>
);
