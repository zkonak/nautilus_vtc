class CarTypeRouter {
  constructor(router, auth, carTypeController) {
    this.router = router;
    this.initializeRoutes(carTypeController, auth);
    return this.router;
  }

  initializeRoutes(carTypeController, auth) {
    this.router.route('/carType')
      .get(carTypeController.getAll)
      .post(auth.authenticate, carTypeController.register)
      .patch(auth.authenticate, carTypeController.update)
      .delete(auth.authenticate, carTypeController.delete);
    this.router.route('/carType/get')
      .get(carTypeController.getOne)
  }
}

export default CarTypeRouter;
