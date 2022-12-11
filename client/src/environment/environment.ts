const environment = {
  env: process.env.REACT_APP_ENV,
  apiUrl: process.env.REACT_APP_API_URL_DEV
};

if (process.env.NODE_ENV !== 'development') {
  environment.apiUrl = process.env.REACT_APP_API_URL_PRODUCTION;
}


export default environment;
