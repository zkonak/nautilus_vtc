import CarTypeEntity from './entity';
import { ApiError } from '../../helpers/error';

class CarTypeService {
  constructor(carTypeRepository) {
    this.carTypeRepo = carTypeRepository;
  }

  async getAll() {
    const carTypes = await this.carTypeRepo.findAll();
    return carTypes.map((carType) => new CarTypeEntity(carType));
  }

  async register(carTypeData) {
    const carTypeEntity = new CarTypeEntity(carTypeData);
    // if (!carTypeEntity.validate())
    //     throw new ApiError(400, 'Missing required email and password fields');

    const newCarType = await this.carTypeRepo.create(carTypeEntity);
    // await this.mailerService.sendMail(carTypeEntity);
    return new CarTypeEntity(newCarType);
  }

  async getOne(carTypeData) {
    const carTypeEntity = new CarTypeEntity(carTypeData);
    const carType = await this.carTypeRepo.findById(carTypeEntity);
    return carType;
  }

  async update(carTypeData) {
    const carTypeEntity = new CarTypeEntity(carTypeData);
    const carTypeFound = await this.carTypeRepo.findById(carTypeEntity);
    const carType = carTypeFound.update(carTypeEntity);
    return carType;
  }

  async delete(carTypeData) {
    const carTypeEntity = new CarTypeEntity(carTypeData);
    const carTypeFound = await this.carTypeRepo.findById(carTypeEntity);
    const carType = carTypeFound.delete(carTypeFound);
    return carType;
  }
}

export default CarTypeService;
