import { RandomDogRepository } from '../Contracts/Repository/RandomDog.Repository';
import { RandomDogService } from '../Contracts/Service/RandomDog.Service';

export class randomDogService implements RandomDogService {

  constructor(private randomDogRepository: RandomDogRepository) {
  }

  public getRandomDog = async () => {
    return this.randomDogRepository.getRandomDog()
  };

}