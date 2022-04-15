class ServiceController {
  constructor(serviceService) {
    this.serviceService = serviceService;
  }

  getAll = async ({ res, next }) => {
    try {
      const services = await this.serviceService.getAll();
      res.status(200).json(services);
    } catch (err) {
      next(err);
    }
  };

  register = async (req, res, next) => {
    try {
      const serviceRegistry = await this.serviceService.register({ ...req.body });
      res.status(201).json(serviceRegistry);
    } catch (err) {
      next(err);
    }
  };

  getOne = async (req, res, next) => {
    try {
      const service = await this.serviceService.getOne({ ...req.body });

      res.status(201).json(service);
    } catch (err) {
      next(err);
    }
  };

  update = async (req, res, next) => {
    try {
      const service = await this.serviceService.update({ ...req.body });
      res.status(201).json(service);
    } catch (err) {
      next(err);
    }
  };

  delete = async (req, res, next) => {
    try {
      const { id } = req.body;
      const serviceFound = await this.serviceService.findOne({
        where: { id },
      });

      await serviceFound.delete();

      res.status(201).json(serviceFound);
    } catch (err) {
      next(err);
    }
  };
}

export default ServiceController;
