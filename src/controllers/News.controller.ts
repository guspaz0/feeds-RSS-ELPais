import { Request, Response } from 'express'
import NewsService from '../services/News.service'
import { SECCION } from '../types/secciones'
import { HttpStatusCode } from '../types/httpStatusCodes'

class NewsController {

    public async getNews(req: Request, res: Response) {
        const data = await NewsService.getNews(req.query)
        res.status(HttpStatusCode.OK).json(data)
    }

    public async fetchNews(req: Request, res: Response){
        const seccion: SECCION = req.query.seccion
            ? req.query.seccion as SECCION
            : SECCION.argentina;
        const data = await NewsService.fetchAndCreate(seccion)
        res.status(HttpStatusCode.OK).json(data)
    }

    public async getNewsById(req: Request, res: Response) {
        const id = req.params.id
        const data = await NewsService.getById(id)
        res.status(HttpStatusCode.OK).json(data)
    }

    public async deleteNew(req: Request, res: Response) {
        const id = req.params.id
        const data = await NewsService.deleteById(id)
        res.status(HttpStatusCode.OK).json(data)
    }

    public async searchNews(req: Request, res: Response){
        const data = await NewsService.search(req.query)
        res.status(HttpStatusCode.OK).json(data)
    }
}

export default new NewsController()