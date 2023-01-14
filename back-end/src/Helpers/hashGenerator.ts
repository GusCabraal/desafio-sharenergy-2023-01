import md5 from 'md5';
import { LoginUser } from '../Contracts/Entities/User';

export const hashGenerator = (data: LoginUser) => {
  const { password } = data;

  const hashedUser = data;

  const userPassword = md5(password);

  hashedUser.password = userPassword;

  return hashedUser;
};