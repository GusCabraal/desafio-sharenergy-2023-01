import { Request, Response } from 'express'

export interface LoginController {
    login(req: Request, res: Response): Promise<Response>;
  }