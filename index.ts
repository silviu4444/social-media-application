import path from 'path';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import express, { Express, NextFunction, Request, Response } from 'express';

import environment from './environment';

import { routes } from './src/routes';

const app: Express = express();

app.use(bodyParser.json({ limit: '7mb' }));

// should be removed on production!
app.use((_, res: Response, next: NextFunction) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PATCH, DELETE, OPTIONS'
  );
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  next();
});

const clientDirectory = path.join(__dirname, '..', 'client', 'build');
console.log('clientDirectory', clientDirectory)
app.use(express.static(clientDirectory));

app.use(routes);

routes.get('*', (req: Request, res: Response) => {
  res.sendFile('index.html', { root: clientDirectory });
});

mongoose
  .connect(environment.MONGODB_URI)
  .then(() => {
    app.listen(environment.PORT, () => {
      console.log(
        `⚡️[server]: Server is running at https://localhost:${environment.PORT}`
      );
    });
  })
  .catch(() => {
    console.log('connection failed');
  });
