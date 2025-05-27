import UserRepository from "../repository/user.repository";
import { HttpStatusCode } from '../types/httpStatusCodes'

class UserService {
  async getUsers() {
    return await UserRepository.findAll({});
  }
}

export default new UserService()