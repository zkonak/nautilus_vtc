class ServiceRouter {

    constructor(router, auth, serviceController) {
        this.router = router;
        this.initializeRoutes(serviceController, auth);
        return this.router;
    }

    initializeRoutes(serviceController, auth) {
        this.router.route('/service')
            .get(serviceController.getOne)
            .post(serviceController.register)
            .patch(serviceController.update)
            .delete(serviceController.delete);
            this.router.route('/serviceAll')
            .get(serviceController.getAll)
        
    }
}

export default ServiceRouter;