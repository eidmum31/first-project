import { Request, Response } from 'express';
import cors from 'cors';

import express from 'express';
import { StudentRoutes } from './modules/student/student.route';
import { UserRouter } from './modules/user/user.route';
import { globalErrorHandlers } from './app/miidlewares/globalErrorHandlers';
import { notFoundHandlers } from './app/miidlewares/notFoundHandler';
import router from './app/routes';
const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/v1', router);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});
app.use(globalErrorHandlers);
app.use(notFoundHandlers);
export default app;
