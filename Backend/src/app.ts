import express, { Request, Response, Application, NextFunction } from 'express';
import initRoutes from './routes/web';
import bodyParser from 'body-parser';
import { connectDatabase } from './config/connectDatabase';
require('dotenv').config();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const PORT: number | string = process.env.PORT || 5001;

initRoutes(app);

connectDatabase();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
