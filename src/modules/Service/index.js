import { Router } from 'express';
import { jwtService, mailerService } from '../../libs';
import { auth } from '../../middlewares';

import ServiceDao from './dao';
import ServiceRepository from './repository';
import ServiceService from './service';
import ServiceController from './controller';
import ServiceRouter from './router';

const router = Router();

const serviceRepository = new ServiceRepository(ServiceDao);
const serviceService = new ServiceService(serviceRepository, mailerService);
const serviceController = new ServiceController(serviceService, jwtService);
const serviceRouter = new ServiceRouter(router, auth, serviceController);

export { serviceRouter, ServiceDao };
