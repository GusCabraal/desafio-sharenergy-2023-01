import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import { UserService } from '../Contracts/Service/Users.Service';

export class userController {

  constructor(private userService: UserService) {}

  public findUsersByPageId = async (req: Request, res: Response) => {
    const { page } = req.query;
    if (page) {
      return this.userService.findUsersByPageId(page as string)
      .then(users => res.status(StatusCodes.OK).json(users));
    }

  };

}