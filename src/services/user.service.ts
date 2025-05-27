import UserRepository from "../repository/user.repository";

class UserService {
  async getUsers() {
    return await UserRepository.findAll({});
  }
}

export default new UserService()