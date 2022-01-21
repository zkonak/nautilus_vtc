class CarTypeController {
  constructor(carTypeService) {
    this.carTypeService = carTypeService;
  }

  getAll = async ({ res, next }) => {
    try {
      const carTypes = await this.carTypeService.getAll();
      res.status(200).json(carTypes);
    } catch (err) {
      next(err);
    }
  };

  register = async (req, res, next) => {
    try {
      const carType = await this.carTypeService.register({ ...req.body });
      res.status(201).json(carType);
    } catch (err) {
      next(err);
    }
  };

  getOne = async (req, res, next) => {
    try {
      const service = await this.carTypeService.getOne({ ...req.body });

      res.status(201).json(service);
    } catch (err) {
      next(err);
    }
  };
  

  update = async (req, res, next) => {
    try {
      const service = await this.carTypeService.update({ ...req.body });
      res.status(201).json(service);
    } catch (err) {
      next(err);
    }
  };

  delete = async (req, res, next) => {
    try {
      const { id } = req.body;
      const serviceFound = await this.carTypeService.findOne({
        where: { id },
      });

      await serviceFound.delete();

      res.status(201).json(serviceFound);
    } catch (err) {
      next(err);
    }
  };
}

export default CarTypeController;
