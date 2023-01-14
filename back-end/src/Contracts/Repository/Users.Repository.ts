import { FilterUsers, User } from '../Entities/User';

export interface UsersRepository {
  filterUsers(data:FilterUsers): Promise<User[]>;
  findUsersByPageId(pageId:string): Promise<User[]>;
}