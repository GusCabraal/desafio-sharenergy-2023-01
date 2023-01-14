import { FilterUsers, User } from '../Entities/User'

export interface UserService {
  findUsersByPageId(pageId:string): Promise<User[]>;
  filterUsers(data: FilterUsers): Promise<User[]>;
}