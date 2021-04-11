import axios from "axios";

axios.defaults.baseURL = "https://www.reddit.com";

axios.interceptors.response.use(null, (err) => {
  const expectedError =
    err.response && err.response.status >= 400 && err.response.status < 500;

  if (expectedError) return Promise.reject(err);
  else {
    console.log("Logging the error: ", err.response.data.message);
  }
});

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};
