import { LoginUser } from '../Contracts/Entities/User';
import { UnauthorizedError } from '../Helpers/CustomErrors/UnauthorizedError';
import { hashGenerator } from '../Helpers/hashGenerator';
import TokenManager from '../Helpers/TokenManager';

export class loginService {

  public login = async (userInfo:LoginUser) => {

    const hashedUser = hashGenerator(userInfo);

    if (hashedUser.username !== 'desafiosharenergy' || hashedUser.password !== '92305f21d8281ac002904977d84c0b2a') {
      throw new UnauthorizedError('Invalid email or password');
    }
    const {password, ...userWithoutPassword  } = hashedUser;
    
    const token = TokenManager.makeToken(userWithoutPassword);
    
    return token;
  };

}