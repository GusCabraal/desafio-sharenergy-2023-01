import { LoginUser } from '../Entities/User'

export interface LoginService {
  login(data:LoginUser): Promise<string>;
}