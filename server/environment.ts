import dotenv from 'dotenv';
dotenv.config();

const environment = {
    PORT: process.env.DEV_PORT,
    MONGODB_URI: process.env.MONGODB_URI_DEV,
    SESSION_SECRET: 'bahsdg1t71bhdabd112hbs13123'
};

if (process.env.STATUS === 'production') {
    environment.PORT = process.env.PROD_PORT
    environment.MONGODB_URI = process.env.MONGODB_URI_PROD
}

export default environment;