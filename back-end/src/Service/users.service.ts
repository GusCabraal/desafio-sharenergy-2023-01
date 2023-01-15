import { FilterUsers } from '../Contracts/Entities/User';
import { UsersRepository } from '../Contracts/Repository/Users.Repository';
import { UserService } from '../Contracts/Service/Users.Service';

export class usersService implements UserService {

  constructor(private usersRepository: UsersRepository) {
  }

  public findUsersByPageId = async (pageId:string) => {
    return this.usersRepository.findUsersByPageId(pageId);
  };

  public filterUsers = async (data:FilterUsers) => {
    return this.usersRepository.filterUsers(data);
  };

}