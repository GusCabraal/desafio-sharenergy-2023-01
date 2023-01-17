import { Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import { HTTPCatController } from '../Contracts/Controller/HTTPCat.Controller'
import { HTTPCatService } from '../Contracts/Service/HTTPCat.Service'

export class httpCatController implements HTTPCatController{
    constructor(private httpCatService: HTTPCatService) {}

    public getHTTPCat = async (req: Request, res: Response) => {
        const { statusCode } = req.params

        return this.httpCatService.getHTTPCat(statusCode).then((httpCat) => {
            return res.status(StatusCodes.OK)
                .contentType('image/jpeg')
                .send(Buffer.from(httpCat, 'binary'))
        })
    }
}
