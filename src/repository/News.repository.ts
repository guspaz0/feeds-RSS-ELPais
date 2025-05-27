import { model, PaginateModel, Types } from "mongoose";
import NewsSchema from "../entities/News.entity";
import { findOptions, Repository } from "../interfaces/repository.interface";
import { INews } from "../interfaces/IMongooseDocument";
import { PageResponse } from "../interfaces/pageResponse.interface";
import { GlobalException } from '../exceptions/global.exception';
import { HttpStatusCode } from '../types/httpStatusCodes'

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
            await instance.save();
            return instance;
        } catch (e) {
            throw e
        }
    }

    async findById(id: string): Promise<INews | null> {
        if(!Types.ObjectId.isValid(id)) {
            throw new GlobalException(`News id ${id} not valid`, HttpStatusCode.BAD_REQUEST);
        }
        return this.repo.findById(id).orFail(
            new GlobalException(`News id ${id} not found`, HttpStatusCode.NOT_FOUND)
        );
    }

    async delete(id: string): Promise<INews | null> {
        if(!Types.ObjectId.isValid(id)) {
            throw new GlobalException(`News id ${id} not valid`, HttpStatusCode.BAD_REQUEST);
        }
        return this.repo.findByIdAndDelete(id).orFail(
            new GlobalException(`News id ${id} not found`, HttpStatusCode.NOT_FOUND)
        );
    }
}

export default new NewsRepository()