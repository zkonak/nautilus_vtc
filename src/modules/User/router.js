class UserRouter {
  constructor(router, auth, userController) {
    this.router = router;
    this.initializeRoutes(userController, auth);
    return this.router;
  }

  initializeRoutes(userController, auth) {
    this.router.route('/user')
      .get(userController.getOneByMail)
      .post(userController.register)
      //.patch(userController.update)
      .delete(userController.delete);
    this.router.route('/user/authenticate').post(userController.login);
    
  }
}

export default UserRouter;
