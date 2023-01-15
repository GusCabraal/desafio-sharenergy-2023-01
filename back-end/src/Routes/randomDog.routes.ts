import { Router } from 'express'
import { randomDogRepository } from '../Repository/randomDog.repository'
import { randomDogService } from '../Service/randomDog.service'
import { randomDogController } from '../Controller/randomDog.controller'

const randomDogRoutes = Router()
const repository = new randomDogRepository()
const service = new randomDogService(repository)
const controller = new randomDogController(service)

randomDogRoutes.get('', controller.findUsersByPageId)

export {
    randomDogRoutes,
}