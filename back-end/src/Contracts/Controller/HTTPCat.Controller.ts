import { Request, Response } from 'express'

export interface HTTPCatController {
    getHTTPCat(req: Request, res: Response): Promise<Response>;
  }