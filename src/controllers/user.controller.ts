import { Request, Response } from 'express'
import UserService from '../services/user.service'

class UserController {

    public async getUsers(req: Request, res: Response) {
        try {
            const users = await UserService.getUsers()
            res.status(200).json(users)
        } catch (error: any) {
            res.status(500).json(error.message)
        }
    }
}

export default new UserController()