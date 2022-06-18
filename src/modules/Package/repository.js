/* eslint-disable no-return-await */
class PackageRepository {
  constructor(packageDao) {
    this.packageDAO = packageDao;
  }

  async findAll() {
    return await this.packageDAO.findAll();
  }

  async create(packageEntity) {
    return await this.packageDAO.create(packageEntity);
  }

  async findById(packageEntity) {
    return await this.packageDAO.findOne({ where: { id: packageEntity.id }, include: 'CarType' });
  }

  async update(packageEntity) {
    return await this.packageDAO.update(packageEntity);
  }

  async delete(packageEntity) {
    return await this.packageDAO.delete(packageEntity);
  }
}

export default PackageRepository;
