import { RandomDog } from '../Entities/RandomDog';

export interface RandomDogRepository {
  getRandomDog(): Promise<RandomDog>;
}