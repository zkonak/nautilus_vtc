class UserRouter {
  constructor(router, auth, userController) {
    this.router = router;
    this.initializeRoutes(userController, auth);
    return this.router;
  }

  initializeRoutes(userController, auth) {
    this.router.route('/user')
      .get(auth.authenticate, userController.getOneByMail)
      .post(userController.register)
      .patch(auth.authenticate, userController.update)
      .delete(auth.authenticate, userController.delete);
    this.router.route('/user/authenticate').post( userController.login);
    this.router.route('/user/auth/refresh').get(userController.refreshToken);
 }
}

export default UserRouter;
