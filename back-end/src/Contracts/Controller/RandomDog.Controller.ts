import { Request, Response } from 'express'

export interface RandomDogController {
  getRandomDog(req: Request, res: Response): Promise<Response>;
  }