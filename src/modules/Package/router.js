class PackageRouter {
  constructor(router, auth, packageController) {
    this.router = router;
    this.initializeRoutes(packageController, auth);
    return this.router;
  }

  initializeRoutes(packageController, auth) {
    this.router.route('/package')
      .get(packageController.getOne)
      .post(packageController.register)
      .patch(packageController.update)
      .delete(packageController.delete);
  }
}

export default PackageRouter;
