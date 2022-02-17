class UserController {
  constructor(userService, jwtService) {
    this.userService = userService;
    this.jwtService = jwtService;
  }

  getAll = async ({ req, res, next }) => {
    try {
      console.log('aaaaaaaaaaaaaa');
      const users = await this.userService.getAll();
      res.status(200).json(users);
    } catch (err) {
      next(err);
    }
  };

  register = async (req, res, next) => {
    try {
      const user = await this.userService.register({ ...req.body });
      res.status(201).json(user);
    } catch (err) {
      next(err);
    }
  };

  getOne = async (req, res, next) => {
    try {
      const service = await this.userService.getOne({ ...req.body });

      res.status(201).json(service);
    } catch (err) {
      next(err);
    }
  };

  getOneByMail = async (req, res, next) => {
    try {
      const service = await this.userService.getOneByMail({ ...req.body });

      res.status(201).json(service);
    } catch (err) {
      next(err);
    }
  };

  update = async (req, res, next) => {
    try {
      const service = await this.userService.update({ ...req.body });
      res.status(201).json(service);
    } catch (err) {
      next(err);
    }
  };

  delete = async (req, res, next) => {
    try {
      const { id } = req.body;
      const serviceFound = await this.userService.findOne({
        where: { id },
      });

      await serviceFound.delete();

      res.status(201).json(serviceFound);
    } catch (err) {
      next(err);
    }
  };

  login = async (req, res, next) => {
    try {
      const user = await this.userService.login({ ...req.body });
      const token = await this.jwtService.generateToken({ id: user.id });
      res.cookie('auth-cookie', token, { expires: false });
      res.status(200).json(user);
    } catch (err) {
      next(err);
    }
  };
}

export default UserController;
