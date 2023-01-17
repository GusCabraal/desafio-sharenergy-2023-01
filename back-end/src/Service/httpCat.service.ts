import { HTTPCatRepository } from '../Contracts/Repository/HTTPCat.Repository';
import { HTTPCatService } from '../Contracts/Service/HTTPCat.Service';

export class httpCatService implements HTTPCatService {

  constructor(private httpCatRepository: HTTPCatRepository) {
  }

  public getHTTPCat = async (statusCode:string) => {
    return this.httpCatRepository.getHTTPCat(statusCode)
  };

}