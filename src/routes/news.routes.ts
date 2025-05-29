import { Router } from 'express'
import NewsController from '../controllers/News.controller'

const router = Router()


router.get("/", (req,res,next) => {
    /* 
    #swagger.summary = 'retorna lista de noticias almacenadas'
    #swagger.description = 'Some description...'
    #swagger.parameters['$ref'] = ['#/components/parameters/page', '#/components/parameters/limit']
    #swagger.responses[200] = {
        content: {
            "application/json": {
                schema: { $ref: '#/components/schemas/pageResponseNews' }
            }
        }
    }
    #swagger.responses[500] = {
        content: {
            "application/json": {
                schema: { $ref: '#/components/schemas/errorResponse' }
            }
        }
    }
    */
        next()
    }, NewsController.getNews)


router.post("/fetch",(req,res,next) => {
    /* 
    #swagger.summary = 'Ingesta de noticias '
    #swagger.parameters['seccion'] = {
        in: 'query',
        description: 'Seccion de noticias que se desea ingestar',
        schema: {
            $ref: '#/components/schemas/seccion'
        }
    }
    #swagger.responses[200] = {
        content: {
            "application/json": {
                schema: { $ref: '#/components/schemas/pageResponseNews' }
            }
        }
    }
    #swagger.responses[500] = {
        content: {
            "application/json": {
                schema: { $ref: '#/components/schemas/errorResponse' }
            }
        }
    }
    */
        next()
    }, NewsController.fetchNews)


router.get("/search",(req,res,next) => {
    /* 
    #swagger.summary = 'busca y retorna lista de noticias almacenadas'
    #swagger.description = 'Some description...'
    #swagger.parameters['$ref'] = [
        '#/components/parameters/page', 
        '#/components/parameters/limit',
        '#/components/parameters/title', 
        '#/components/parameters/category',
        '#/components/parameters/from', 
        '#/components/parameters/to',
    ]
    #swagger.responses[200] = {
        content: {
            "application/json": {
                schema: { $ref: '#/components/schemas/pageResponseNews' }
            }
        }
    }
    #swagger.responses[500] = {
        content: {
            "application/json": {
                schema: { $ref: '#/components/schemas/errorResponse' }
            }
        }
    }
    */
    next()
    },NewsController.searchNews)

router.route("/:id")
    .get((req,res,next) => {
    /* 
    #swagger.summary = 'buscar noticia almacenada por ID'
    #swagger.description = 'Retorna una noticia por su ID o devuelve un error'
    #swagger.responses[200] = {
        content: {
            "application/json": {
                schema: { $ref: '#/components/schemas/News' }
            }
        }
    }
    #swagger.responses[500] = {
        content: {
            "application/json": {
                schema: { $ref: '#/components/schemas/errorResponse' }
            }
        }
    }
    #swagger.responses[400] = {
        content: {
            "application/json": {
                schema: { $ref: '#/components/schemas/errorResponse' }
            }
        }
    }
    #swagger.responses[404] = {
        content: {
            "application/json": {
                schema: { $ref: '#/components/schemas/errorResponse' }
            }
        }
    }
    */
        next()
    },NewsController.getNewsById)
    .delete((req,res,next) => {
    /* 
    #swagger.summary = 'buscar y Eliminar noticia almacenada por ID'
    #swagger.description = 'Retorna y ELIMINA una noticia por su ID o devuelve un error'
    #swagger.responses[200] = {
        content: {
            "application/json": {
                schema: { $ref: '#/components/schemas/News' }
            }
        }
    }
    #swagger.responses[500] = {
        content: {
            "application/json": {
                schema: { $ref: '#/components/schemas/errorResponse' }
            }
        }
    }
    #swagger.responses[400] = {
        content: {
            "application/json": {
                schema: { $ref: '#/components/schemas/errorResponse' }
            }
        }
    }
    #swagger.responses[404] = {
        content: {
            "application/json": {
                schema: { $ref: '#/components/schemas/errorResponse' }
            }
        }
    }
    */
        next()
    },NewsController.deleteNew);

export default router