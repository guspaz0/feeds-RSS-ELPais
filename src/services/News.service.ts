import { SECCION } from "../types/secciones";
import { fetchData } from "../utils/fetchData";
import NewsRepository from "../repository/News.repository";
import { INews } from "../interfaces/IMongooseDocument";

class NewsService {

    async getNews(query: any){
        const { limit, page } = query
        const findOpt = {
          limit: limit ? +limit : 20,
          page: page ? +page : 1
        }
        const data = await NewsRepository.findAll(findOpt);
      return data
    }

    async fetchAndCreate(seccion: SECCION) {
        try {
            const data = await fetchData(seccion)
            const promises = data.map((feed: INews) => new Promise((resolve) => 
                NewsRepository.create({...feed, section: seccion}).then(data => resolve(data))
            ))
            const createdEntities = await Promise.all(promises)
            return createdEntities.filter(feed => feed != null)
        } catch (e) {
            console.log(e)
        }
    }

    async getById(id: string) {
        return await NewsRepository.findById(id)
    }

    async deleteById(id: string) {
        return await NewsRepository.delete(id)
    }
    async search(query: any) {
        const { page, limit, title, category, from, to } = query
        const findOpt = {
          limit: limit? +limit : 20, 
          page: page? +page : 1,
          where: {
            title: { $regex: title? title : '' },
            category: { $regex: category? category : '' },
            pubDate: { $gte: from? from : new Date(0), $lte: to? to : new Date() }
          }
        }
        return await NewsRepository.findAll(findOpt)
    }
}

export default new NewsService()