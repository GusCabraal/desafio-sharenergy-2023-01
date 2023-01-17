import axios from 'axios';
import { HTTPCatRepository } from '../Contracts/Repository/HTTPCat.Repository';

export class httpCatRepository implements HTTPCatRepository {

  public getHTTPCat = async (statusCode: string) => {
    return axios.get(`https://http.cat/${statusCode}`)
    .then(({ data }) => data);
  };

}