class ReservationController {
  constructor(reservationService) {
    this.reservationService = reservationService;
  }

  getAll = async ({ res, next }) => {
    try {
      const reservations = await this.reservationService.getAll();
      res.status(200).json(reservations);
    } catch (err) {
      next(err);
    }
  };

  register = async (req, res, next) => {
    try {
      const reservationRegistry = await this.reservationService.register({ ...req.body });
      res.status(201).json(reservationRegistry);
    } catch (err) {
      next(err);
    }
  };

  getOne = async (req, res, next) => {
    try {
      const service = await this.reservationService.getOne({ ...req.body });

      res.status(201).json(service);
    } catch (err) {
      next(err);
    }
  };

  getAllByUser = async (req, res, next) => {
    try {
      const service = await this.reservationService.getAllByUser({ ...req.body });

      res.status(201).json(service);
    } catch (err) {
      next(err);
    }
  };

  update = async (req, res, next) => {
    try {
      const service = await this.reservationService.update({ ...req.body });
      res.status(201).json(service);
    } catch (err) {
      next(err);
    }
  };

  delete = async (req, res, next) => {
    try {
      const { id } = req.body;
      const serviceFound = await this.reservationService.findOne({
        where: { id },
      });

      await serviceFound.delete();

      res.status(201).json(serviceFound);
    } catch (err) {
      next(err);
    }
  };

  calcul = async (req, res, next) => {
    try {
      const calcul = await this.reservationService.calcul({ ...req.body });
      res.status(201).json(calcul);
    } catch (err) {
      next(err);
    }
  };
}

export default ReservationController;
