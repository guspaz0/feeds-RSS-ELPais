import { Request, Response } from 'express'
import NewsService from '../services/News.service'
import { SECCION } from '../types/secciones'

class NewsController {

    public async getNews(req: Request, res: Response) {
        try {
            const data = await NewsService.getNews(req.query)
            res.status(200).json(data)
        } catch (error: any) {
            res.status(500).json(error.message)
        }
    }

    public async fetchNews(req: Request, res: Response){
        try {
            const seccion: SECCION = req.query.seccion
                ? req.query.seccion as SECCION
                : SECCION.argentina;
            const data = await NewsService.fetchAndCreate(seccion)
            res.status(200).json(data)
        } catch (error: any) {
            res.status(500).json(error.message)
        }
    }

    public async getNewsById(req: Request, res: Response) {
        try {
            const id = req.params.id
            const data = await NewsService.getById(id)
            res.status(200).json(data)
        } catch (error: any) {
            res.status(500).json(error.message)
        }
    }

    public async deleteNew(req: Request, res: Response) {
        try {
            const id = req.params.id
            const data = await NewsService.deleteById(id)
            res.status(200).json(data)
        } catch (error: any) {
            res.status(500).json(error.message)
        }
    }

    public async searchNews(req: Request, res: Response){
        try {

            const data = await NewsService.search(req.query)
            res.status(200).json(data)
        } catch (error: any) {
            res.status(500).json(error.message)
        }
    }
}

export default new NewsController()