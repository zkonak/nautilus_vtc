class PackageController {
  constructor(packageService) {
    this.packageService = packageService;
  }

  getAll = async ({ res, next }) => {
    try {
      const packages = await this.packageService.getAll();
      res.status(200).json(packages);
    } catch (err) {
      next(err);
    }
  };

  register = async (req, res, next) => {
    try {
      const packageRegistry = await this.packageService.register({ ...req.body });
      res.status(201).json(packageRegistry);
    } catch (err) {
      next(err);
    }
  };

  getOne = async (req, res, next) => {
    try {
      const service = await this.packageService.getOne({ ...req.body });

      res.status(201).json(service);
    } catch (err) {
      next(err);
    }
  };

  update = async (req, res, next) => {
    try {
      const service = await this.packageService.update({ ...req.body });
      res.status(201).json(service);
    } catch (err) {
      next(err);
    }
  };

  delete = async (req, res, next) => {
    try {
      const { id } = req.body;
      const serviceFound = await this.packageService.findOne({
        where: { id },
      });

      await serviceFound.delete();

      res.status(201).json(serviceFound);
    } catch (err) {
      next(err);
    }
  };
}

export default PackageController;
