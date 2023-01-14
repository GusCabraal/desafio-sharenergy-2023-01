import { FilterUsers, User } from '../Contracts/Entities/User';
import { UsersRepository } from '../Contracts/Repository/Users.Repository';
import axios from 'axios';

interface ApiRandomUserResponse {
  results: User[]
}


export class usersRepository implements UsersRepository {

  public findUsersByPageId = async (pageId: string) => {
    return axios.get<ApiRandomUserResponse>(`https://randomuser.me/api/?inc=name,email,login,dob,picture&page=${pageId}&results=10&seed=abc`)
    .then(({ data }) => data.results);
  };

  public filterUsers = async ({ prop, value }: FilterUsers) => {
    return axios.get<ApiRandomUserResponse>(`https://randomuser.me/api/?inc=name,email,login,dob,picture&results=100&seed=abc`)
    .then(({ data }) => data.results.filter((user) => {
      if (prop === 'email'){
        return user.email.includes(value);
      } else if (prop === 'name'){
        return `${user.name.first} ${user.name.last}`.includes(value);
      } else {
        return user.login.username.includes(value);
      }
    })); 
  };

}