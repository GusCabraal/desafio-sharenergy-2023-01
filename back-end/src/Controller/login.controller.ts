import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { LoginService } from '../Contracts/Service/Login.Service';

export class LoginController {

  constructor(private loginService: LoginService) {
  }

  public login = async (req: Request, res: Response) => {
    await this.loginService.login(req.body)
    .then(token => res.status(StatusCodes.OK).json({ token }));
  };
}