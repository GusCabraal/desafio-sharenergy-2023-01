import { Router } from 'express'
import { usersRepository } from '../Repository/users.repository'
import { usersService } from '../Service/users.service'
import { userController } from '../Controller/users.controller'

const usersRoutes = Router()
const repository = new usersRepository()
const service = new usersService(repository)
const controller = new userController(service)

usersRoutes.get('', controller.findUsersByPageId)

export {
    usersRoutes,
}