import express from 'express';
import cors from 'cors';
//import passport from 'passport';

import { router } from './features/api/api.router';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: '*',
    methods: ['GET', 'PUT', 'POST', 'DELETE'],
  }),
);

app.use('/api', router);

export default app;
