import { model, PaginateModel } from "mongoose";
import userSchema from "../entities/user.entity";
import { findOptions, Repository } from "../interfaces/repository.interface";
import { IUser } from "../interfaces/IMongooseDocument";
import { PageResponse } from "../interfaces/pageResponse.interface";

class UserRepository implements Repository<IUser> {
  repo = model<IUser, PaginateModel<IUser>>('User', userSchema, 'users');

  async findById(id: string): Promise<IUser | null> {
    return this.repo.findById(id).orFail();
  }

  async findAll(args: findOptions<IUser>): Promise<PageResponse<IUser>> {
    const options = {
      page: args?.page ? args.page : 1,
      limit: args?.limit ? args.limit : 20,
    };
    const paginationResult = await this.repo.paginate({ ...args?.where }, options);
    return {
      page: paginationResult.page as number,
      limit: paginationResult.limit,
      total: paginationResult.totalPages,
      results: paginationResult.docs as IUser[],
    };
  }
}

export default new UserRepository()