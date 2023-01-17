import { Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import { ClientManagerController } from '../Contracts/Controller/ClientManager.Controller';
import { ClientManagerService } from '../Contracts/Service/ClientManager.Service'

export class clientManagerController implements ClientManagerController{
	constructor(private clientManagerService: ClientManagerService) {}
	
	public create = async (req: Request, res: Response) => {
		const client = req.body;
	
		return this.clientManagerService.create(client)
		.then((newClient) => res.status(StatusCodes.CREATED).json(newClient)
		)
	}

	public getAll = async (_req: Request, res: Response) =>  {
		return this.clientManagerService.getAll()
		.then((clients) => res.status(StatusCodes.OK).json(clients))
	}

	public updateById = async (req: Request, res: Response) => {
		const { params: { id }, body } = req;

		return this.clientManagerService.update(id, body)
		.then((updatedClients) => res.status(StatusCodes.OK).json(updatedClients))
	}

	public deleteById = async (req: Request, res: Response) =>  {
		const { id } = req.params;
		return this.clientManagerService.delete(id)
		.then((clients) => res.sendStatus(StatusCodes.NO_CONTENT))
	}
}

