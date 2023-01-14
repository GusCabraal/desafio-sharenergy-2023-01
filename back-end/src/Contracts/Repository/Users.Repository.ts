import { User } from '../Entities/User';

export interface UsersRepository {
  findUsersByPageId(pageId:string): Promise<User[]>;
}