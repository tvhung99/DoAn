import express, { Application, Router, Request, Response, NextFunction } from 'express';
import auth from '../controllers/authController';

const router = Router();

const initRoutes = (app: Application): any => {
  // router.get('/' , (req : Request , res : Response , next : NextFunction) : any =>{
  //     return res.send('Hung Tran')
  // })
  router.post('/v1/login', auth.login);
  return app.use('/api', router);
};
export default initRoutes;
