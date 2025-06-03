export const MessageAtom = () => {
   return (
      <div
         className="flex inline-flex justify-between bg-teal-100 border border-teal-400 text-teal-700 px-4 py-3 my-2 rounded "
         role="alert"
      >
         <span className="block sm:inline pl-2">
            <strong className="font-bold">Success</strong>
            Your message
         </span>
         <span className="inline" onClick="return this.parentNode.remove();">
            <svg
               className="fill-current h-6 w-6"
               role="button"
               xmlns="http://www.w3.org/2000/svg"
               viewBox="0 0 20 20"
            >
               <title>Close</title>
               <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
            </svg>
         </span>
      </div>
   );
};
