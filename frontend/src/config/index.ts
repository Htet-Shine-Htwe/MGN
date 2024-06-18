const config = {
    baseUrl: import.meta.env.VITE_API_URL_PREFIX || "http://127.0.0.1:8080/api/v1",
    expireIn: 10080,
  };
  
  export default config;