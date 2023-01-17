import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { RandomDogController } from '../Contracts/Controller/RandomDog.Controller';
import { RandomDogService } from '../Contracts/Service/RandomDog.Service';

export class randomDogController implements RandomDogController {

  constructor(private randomDogService: RandomDogService) {}

  public getRandomDog = async (req: Request, res: Response) => {

      return this.randomDogService.getRandomDog()
      .then(randomDog => res.status(StatusCodes.OK).json(randomDog.message));
    }


}