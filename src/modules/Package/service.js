import PackageEntity from './entity';
import { ApiError } from '../../helpers/error';

class PackageService {
  constructor(packageRepository, mailerService) {
    this.packageRepo = packageRepository;
    this.mailerService = mailerService;
  }

  async getAll() {
    const packages = await this.packageRepo.findAll();
    return packages.map((pack) => new PackageEntity(pack));
  }

  async register(packageData) {
    const packageEntity = new PackageEntity(packageData);
    if (!packageEntity.validate()) { throw new ApiError(400, 'Missing required  fields'); }

    const newPackage = await this.packageRepo.create(packageEntity);
    // await this.mailerService.sendMail(packageEntity);
    return new PackageEntity(newPackage);
  }

  async getOne(packageData) {
    const packageEntity = new PackageEntity(packageData);
    const newPackage = await this.packageRepo.findById(packageEntity);
    return newPackage;
  }

  async update(packageData) {
    const packageEntity = new PackageEntity(packageData);
    if (!packageEntity.validate()) { throw new ApiError(400, 'Missing required  fields'); }

    const newPackage = await this.packageRepo.findById(packageEntity);
    const newPackageUpdated = newPackage.update(packageEntity);
    return newPackageUpdated;
  }

  async delete(packageData) {
    const packageEntity = new PackageEntity(packageData);
    const newPackage = await this.packageRepo.findById(packageEntity);
    const newPackageDeleted = newPackage.update(packageEntity);
    return newPackageDeleted;
  }
}

export default PackageService;
