/* eslint-disable no-constructor-return */
class PackageRouter {
  constructor(router, auth, packageController) {
    this.router = router;
    this.initializeRoutes(packageController, auth);
    return this.router;
  }

  // eslint-disable-next-line no-unused-vars
  initializeRoutes(packageController, auth) {
    this.router.route('/package')
      .get(packageController.getAll)
      .post(packageController.register)
      .patch(packageController.update)
      .delete(packageController.delete);
    this.router.route('/package/get').get(packageController.getOne);
  }
}

export default PackageRouter;
