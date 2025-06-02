import axios from 'axios';

export const api = axios.create({
   baseURL: 'https://jsonplaceholder.typicode.com',
   headers: { Accept: 'application/json' },
});

export const httpErrorHandler = (error: Error) => {
   if (error === null) throw new Error('Unrecoverable error!! Error is null!');

   if (axios.isAxiosError(error)) {
      const response = error?.response;
      const request = error?.request;

      if (error.code === 'ERR_NETWORK') {
         console.log('connection problems..');
      } else if (error.code === 'ERR_CANCELED') {
         console.log('connection canceled..');
      }

      if (response) {
         //The request was made and the server responded with a status code that falls out of the range of 2xx the http status code mentioned above
         return response.data.message;
      } else if (request) {
         //The request was made but no response was received, `error.request` is an instance of XMLHttpRequest in the browser and an instance of http.ClientRequest in Node.js
      }
   } else {
      console.log(error.message);
   }
};
