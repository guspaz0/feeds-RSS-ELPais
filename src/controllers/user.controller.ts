import { Request, Response } from 'express'
import UserService from '../services/user.service'
import { HttpStatusCode } from '../types/httpStatusCodes'

class UserController {

    public async getUsers(req: Request, res: Response) {
        const users = await UserService.getUsers()
        res.status(HttpStatusCode.OK).json(users)
    }
}

export default new UserController()