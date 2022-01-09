import { Request, Response, NextFunction } from 'express';
import { handleUserLogin } from '../services/service.user';
import { TRANSLATION } from '../common/constants/translation';
import db from '../models';
const login = async (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(404).json({ message: TRANSLATION.authentication.MISSING_PARAM });

  const response: any = await handleUserLogin(email, password);
  if (response.code === 1) {
    const user = await db.User.findOne({
      where: { email },
      raw: true,
    });
    //compare password ( data fake , not hashed) , replace if password hashed
    if (password === user.password) {
      delete user.password;
      res.status(200).json({ user, message: '', access_token: '', refresh_token: '', expire_date: '' });
    } else res.status(200).json({ user: {}, message: 'Wrong password' });
  } else res.status(404).json({ message: 'Unknown', user: {} });
};

export default {
  login,
};
