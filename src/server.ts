import 'dotenv/config';

import bodyParser from 'body-parser';
import cors from 'cors';

import App from './app';
import routes from './routes';

import './config/mongo';

const PORT = Number(process.env.PORT);

const app = new App({
  port: PORT,
  routes,
  middleWares: [
    bodyParser.json(),
    bodyParser.urlencoded({ extended: true }),
    cors(),
  ],
});
app.listen();
