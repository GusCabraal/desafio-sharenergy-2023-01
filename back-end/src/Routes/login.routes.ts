import { Router } from 'express'
import { loginService } from '../Service/login.service'
import { LoginController } from '../Controller/login.controller'

const loginRoutes = Router()
const service = new loginService()
const controller = new LoginController(service)

loginRoutes.post('', controller.login)

export {
    loginRoutes,
}