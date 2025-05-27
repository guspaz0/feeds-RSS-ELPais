import { PageResponse } from "./pageResponse.interface"

export interface Repository<T> {
  findAll: (args: findOptions<T>) => Promise<PageResponse<T>>;
  findById: (id: string) => Promise<T | null>;
  findBy?: (prop: keyof T) => Promise<T | null>;
  create?: (entity: Partial<T | any>) => Promise<T | undefined>;
  delete?: (id: string) => Promise<T | null>;
}

export interface findOptions<T> {
    where?: Record<keyof T | string, any>,
    page?: number, 
    limit?: number
}