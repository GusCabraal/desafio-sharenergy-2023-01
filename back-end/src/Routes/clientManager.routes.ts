import { Router } from 'express'
import { ClientODM } from '../Models/ClientODM';
import { clientManagerRepository } from '../Repository/clienteManager.repository'
import { clientManagerService } from '../Service/clientManager.service'
import { clientManagerController } from '../Controller/clientManager.controller'

const clientManagerRoutes = Router()
const ODM = new ClientODM();
const repository = new clientManagerRepository(ODM)
const service = new clientManagerService(repository)
const controller = new clientManagerController(service)

clientManagerRoutes.get('/', controller.getAll)
clientManagerRoutes.post('/', controller.create)
clientManagerRoutes.put('/:id', controller.updateById)
clientManagerRoutes.delete('/:id', controller.deleteById)

export {
    clientManagerRoutes,
}