class ServiceRouter {

    constructor(router, auth, serviceController) {
        this.router = router;
        this.initializeRoutes(serviceController, auth);
        return this.router;
    }

    initializeRoutes(serviceController, auth) {
        this.router.route('/service')
            .get(serviceController.getOne)
            .post(auth.authenticate, serviceController.register)
            .patch(auth.authenticate, serviceController.update)
            .delete(auth.authenticate, serviceController.delete);
            this.router.route('/serviceAll')
            .get(serviceController.getAll)
        
    }
}

export default ServiceRouter;