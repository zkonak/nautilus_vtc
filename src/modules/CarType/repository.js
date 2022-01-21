

class CarTypeRepository {
  constructor(carTypeDao) {
    this.carTypeDAO = carTypeDao;
  }

  async findAll() {
    return await this.carTypeDAO.findAll();
  }

  async create(carTypeEntity) {
    // const salt = bcrypt.genSaltSync(10);
    // patientEntity.password = bcrypt.hashSync(patientEntity.password, salt);
    return await this.carTypeDAO.create(carTypeEntity);
  }

  async findById(carTypeEntity) {
    return await this.carTypeDAO.findOne({ where: { id: carTypeEntity.id } });
  }

  async create(carTypeEntity) {
    // const salt = bcrypt.genSaltSync(10);
    // patientEntity.password = bcrypt.hashSync(patientEntity.password, salt);
    return await this.carTypeDAO.create(carTypeEntity);
  }

  async update(carTypeEntity) {
    
    return await this.carTypeDAO.update(carTypeEntity);
  }

  async delete(carTypeEntity) {

    return await this.carTypeDAO.delete(carTypeEntity);
  }
}

export default CarTypeRepository;
