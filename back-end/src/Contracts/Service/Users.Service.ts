import { User } from '../Entities/User'

export interface UserService {
  findUsersByPageId(pageId:string): Promise<User[]>;
}