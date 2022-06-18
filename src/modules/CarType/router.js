class CarTypeRouter {
  constructor(router, auth, carTypeController) {
    this.router = router;
    this.initializeRoutes(carTypeController, auth);
    return this.router;
  }

  initializeRoutes(carTypeController, auth) {
    this.router.route('/carType')
      .get(carTypeController.getAll)
      .post(carTypeController.register)
      .patch(carTypeController.update)
      .delete(carTypeController.delete);
    this.router.route('/carType/get')
      .get(carTypeController.getOne)
  }
}

export default CarTypeRouter;
