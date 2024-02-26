import express from 'express';
import 'express-async-errors';


import { json } from 'body-parser';
import { exampleRouter } from './routes/example';

// in this file will be all middlewares

const app = express();
app.set('trust proxy', true);
app.use(json());
app.use(exampleRouter);

export { app };

// import { errorHandler, NotFoundError } from '@cygnetops/common';
// import { currentUserRouter } from './routes/current-user';
// import { signinRouter } from './routes/signin';
// import { signoutRouter } from './routes/signout';
// import { signupRouter } from './routes/signup';



// app.use(currentUserRouter);
// app.use(signinRouter);
// app.use(signoutRouter);
// app.use(signupRouter);

// app.all('*', async (req, res) => {
//   throw new NotFoundError();
// });

// app.use(errorHandler);

