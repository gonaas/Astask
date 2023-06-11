import express from 'express';
import cors from 'cors';
//import passport from 'passport';

import { router } from './features/api/api.router';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
    exposedHeaders: ['SET-COOKIE'],
    allowedHeaders: [
      'Origin',
      'X-Requested-With',
      'Content-Type',
      'Accept',
      'Access-Control-Allow-Origin',
      'Access-Control-Allow-Request-Method',
      'Access-Control-Allow-Credentials',
      'Set-Cookie',
    ],
    methods: ['GET', 'PUT', 'POST', 'DELETE'],
  }),
);

//app.use(passport.initialize());
//app.use(passport.session());

app.use('/api', router);

export default app;
