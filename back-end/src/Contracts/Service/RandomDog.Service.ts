import { RandomDog } from '../Entities/RandomDog';

export interface RandomDogService {
  getRandomDog(): Promise<RandomDog>;
}