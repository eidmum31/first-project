import { Request, Response } from 'express';
import cors from 'cors';

import express from 'express';
import { StudentRoutes } from './modules/student/student.route';
const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/v1/students', StudentRoutes);
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

export default app;
