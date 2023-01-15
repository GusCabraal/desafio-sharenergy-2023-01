import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { RandomDogService } from '../Contracts/Service/RandomDog.Service';

export class randomDogController {

  constructor(private randomDogService: RandomDogService) {}

  public findUsersByPageId = async (req: Request, res: Response) => {

      return this.randomDogService.getRandomDog()
      .then(randomDog => res.status(StatusCodes.OK).json(randomDog.message));
    }


}