import db from '../models/index';
import { TRANSLATION } from '../common/constants/translation';

const checkExistUserEmail = (email: string) => {
  return new Promise(async (resolve, reject) => {
    try {
      const user = await db.User.findOne({ where: { email } });
      if (user) resolve(true);
      else resolve(false);
    } catch (error) {
      reject(error);
    }
  });
};

export const handleUserLogin = (email: string, password: string) => {
  const userData: any = {};
  return new Promise(async (resolve, reject) => {
    try {
      const isExistUser = await checkExistUserEmail(email);
      if (isExistUser) {
        userData.code = 1;
        userData.message = '';
      } else {
        userData.code = 0;
        userData.message = TRANSLATION.authentication.EMAIL_INVALID;
      }
      resolve(userData);
    } catch (error) {
      reject(error);
    }
  });
};
