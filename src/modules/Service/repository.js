/* eslint-disable no-return-await */
import bcrypt from 'bcrypt';

class ServiceRepository {
  constructor(serviceDao) {
    this.serviceDAO = serviceDao;
  }

  async findAll() {
    return await this.serviceDAO.findAll({include: 'CarType'});
  }

  async create(serviceEntity) {
    return await this.serviceDAO.create(serviceEntity);
  }

  async findById(serviceEntity) {
    
    return await this.serviceDAO.findOne({ where: { id: serviceEntity.id },include: 'CarType'  });
  }

  async findPrice(serviceEntity) {
    return await this.serviceDAO.findOne({ where: { name: serviceEntity.name, carTypeId: serviceEntity.carTypeId } });
  }

  async update(serviceEntity) {
    return await this.serviceDAO.update(serviceEntity);
  }

  async delete(serviceEntity) {
    return await this.serviceDAO.delete(serviceEntity);
  }
}

export default ServiceRepository;
