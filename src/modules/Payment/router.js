class PaymentRouter {
  constructor(router, auth, paymentController) {
    this.router = router;
    this.initializeRoutes(paymentController, auth);
    return this.router;
  }

  initializeRoutes(paymentController, auth) {
    this.router.route('/payment')
      .get(auth.authenticate, paymentController.getAllByReservation)
      .post(auth.authenticate, paymentController.register)
      .patch(auth.authenticate, paymentController.update);
    this.router.route('/payment/download').post(auth.authenticate, paymentController.downloadInvoice);
  }
}

export default PaymentRouter;
