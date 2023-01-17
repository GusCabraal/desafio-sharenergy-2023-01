import { Router } from 'express'
import { httpCatRepository } from '../Repository/httpCat.repository'
import { httpCatService } from '../Service/httpCat.service'
import { httpCatController } from '../Controller/httpCat.controller'

const httpCatRoutes = Router()
const repository = new httpCatRepository()
const service = new httpCatService(repository)
const controller = new httpCatController(service)

httpCatRoutes.get('/:statusCode', controller.getHTTPCat)

export {
    httpCatRoutes,
}