import express from 'express';
import 'express-async-errors';
import { handleErrors } from './Middlewares/handleErrors';
import { loginRoutes, usersRoutes } from './Routes';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors())

app.use('/login', loginRoutes);
app.use('/users', usersRoutes);

app.use(handleErrors);

export default app;