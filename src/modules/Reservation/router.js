class ReservationRouter {
  constructor(router, auth, reservationController) {
    this.router = router;
    this.initializeRoutes(reservationController, auth);
    return this.router;
  }

  initializeRoutes(reservationController, auth) {
    this.router.route('/reservation')
      .post(auth.authenticate, reservationController.register)
      .get(auth.authenticate, reservationController.getOne)
      .patch(auth.authenticate, reservationController.update)
      .delete(auth.authenticate, reservationController.delete);
    this.router.route('/reservationAll')
      .get(auth.authenticate, reservationController.getAllByUser);
  }
}

export default ReservationRouter;
