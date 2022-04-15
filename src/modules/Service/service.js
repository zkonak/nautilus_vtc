import ServiceEntity from './entity';
import { ApiError } from '../../helpers/error';

class ServiceService {
  constructor(serviceRepository, mailerService) {
    this.serviceRepo = serviceRepository;
    this.mailerService = mailerService;
  }

  async getAll() {
    const services = await this.serviceRepo.findAll();
    return services.map((pack) => new ServiceEntity(pack));
  }

  async register(serviceData) {
    const serviceEntity = new ServiceEntity(serviceData);
    if (!serviceEntity.validate()) { throw new ApiError(400, 'Missing required  fields'); }

    const newService = await this.serviceRepo.create(serviceEntity);
   //await this.mailerService.sendMail(serviceEntity);
    return new ServiceEntity(newService);
  }


  async getOne(serviceData) {
    const serviceEntity = new ServiceEntity(serviceData);
    const service = await this.serviceRepo.findById(serviceEntity);
    return service;
  }

  async getByName(serviceData) {
    const serviceEntity = new ServiceEntity(serviceData);
    const service = await this.serviceRepo.findByName(serviceEntity);
    return service;
  }

  async update(serviceData) {
    const serviceEntity = new ServiceEntity(serviceData);
    if (!serviceEntity.validate()) { throw new ApiError(400, 'Missing required  fields'); }

    const service = await this.serviceRepo.findById(serviceEntity);
    const serviceUpdated = service.update(serviceEntity);
    return serviceUpdated;
  }

  async delete(serviceData) {
    const serviceEntity = new ServiceEntity(serviceData);
    const service = await this.serviceRepo.findById(serviceEntity);
    const serviceDeleted = service.update(serviceEntity);
    return serviceDeleted;
  }
}

export default ServiceService;
