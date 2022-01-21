/* eslint-disable no-return-await */
import bcrypt from 'bcrypt';

class UserRepository {
  constructor(userDao) {
    this.userDAO = userDao;
  }

  async findAll() {
    return await this.userDAO.findAll();
  }

  async create(userEntity) {
    const salt = bcrypt.genSaltSync(10);
    userEntity.password = bcrypt.hashSync(userEntity.password, salt);
    return await this.userDAO.create(userEntity);
  }

  async findById(userEntity) {
    return await this.userDAO.findOne({ where: { id: userEntity.id } });
  }

  async findByMail(userEntity) {
    return await this.userDAO.findOne({ where: { mail: userEntity.mail } });
  }

  async update(userEntity) {
    return await this.userDAO.update(userEntity);
  }

  async delete(userEntity) {
    return await this.userDAO.delete(userEntity);
  }
  compareHash = async (password, hash) => await bcrypt.compareSync(password, hash);
}

export default UserRepository;
