class PaymentRouter {
  constructor(router, auth, paymentController) {
    this.router = router;
    this.initializeRoutes(paymentController, auth);
    return this.router;
  }

  initializeRoutes(paymentController, auth) {
    this.router.route('/payment')
      .get(paymentController.getAllByReservation)
      .post(paymentController.register)
      .patch(paymentController.update);
  }
}

export default PaymentRouter;
