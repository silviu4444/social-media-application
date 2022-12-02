const environment = {
  env: process.env.REACT_APP_ENV,
  apiUrl: process.env.REACT_APP_API_URL_DEV
};

if (process.env.REACT_APP_ENV !== 'development') {
  environment.apiUrl = process.env.REACT_APP_API_URL_PRODUCTION;
  environment.env = 'production';
}

export default environment;
