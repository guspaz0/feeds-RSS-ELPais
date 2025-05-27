import { Model, model, PaginateModel } from "mongoose";
import NewsSchema from "../entities/News.entity";
import { findOptions, Repository } from "../interfaces/repository.interface";
import { INews } from "../interfaces/IMongooseDocument";
import { PageResponse } from "../interfaces/pageResponse.interface";

class NewsRepository implements Repository<INews> {
  repo = model<INews, PaginateModel<INews>>('New', NewsSchema, 'news');

  async findAll(args: findOptions<INews>): Promise<PageResponse<INews>> {
    const options = {
      page: args?.page ? args.page : 1,
      limit: args?.limit ? args.limit : 20,
    };
    const paginationResult = await this.repo.paginate(args?.where, options);
    return {
      page: paginationResult.page as number,
      limit: paginationResult.limit,
      total: paginationResult.totalPages as number,
      results: paginationResult.docs as INews[],
    };
  }

  async create(entity: Partial<INews | any>): Promise<INews | undefined> {
    try {
      const instance = new this.repo({
        title: entity.title[0],
        description: entity.description[0],
        pubDate: new Date(entity.pubDate[0]),
        category: entity.category,
        link: entity.link[0],
        media_content: entity['media:content'] ? entity['media:content'][0]['$'] : {},
        section: entity.section,
      });
      instance.toJSON();
      await instance.save();
      return instance;
    } catch (e) {
      console.error(e);
    }
  }

  async findById(id: string): Promise<INews | null> {
    return this.repo.findById(id).orFail();
  }

  async delete(id: string): Promise<INews | null> {
    return await this.repo.findByIdAndDelete(id).orFail();
  }
}

export default new NewsRepository()