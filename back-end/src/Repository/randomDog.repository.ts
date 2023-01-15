import axios from 'axios';
import { RandomDog } from '../Contracts/Entities/RandomDog';
import { RandomDogRepository } from '../Contracts/Repository/RandomDog.Repository';

export class randomDogRepository implements RandomDogRepository {

  public getRandomDog = async () => {
    return axios.get<RandomDog>('https://dog.ceo/api/breeds/image/random')
    .then(({ data }) => data);
  };

}