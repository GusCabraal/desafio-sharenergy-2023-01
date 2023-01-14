import { User } from '../Contracts/Entities/User';
import { UsersRepository } from '../Contracts/Repository/Users.Repository';
import axios from 'axios';

interface ApiRandomUserResponse {
  results: User[]
}


export class usersRepository implements UsersRepository {

  public findUsersByPageId = async (pageId: string) => {
    const users = await axios.get<ApiRandomUserResponse>(`https://randomuser.me/api/?inc=name,email,login,dob,picture&page=${pageId}&results=10&seed=abc`)
    .then(({ data }) => data.results);
    
    return users;
  };

}