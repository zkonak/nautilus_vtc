import { Router } from 'express';
import { jwtService, mailerService } from '../../libs';
import { auth } from '../../middlewares';

import CarTypeDao from './dao';
import CarTypeRepository from './repository';
import CarTypeService from './service';
import CarTypeController from './controller';
import CarTypeRouter from './router';

const router = Router();

const carTypeRepository = new CarTypeRepository(CarTypeDao);
const carTypeService = new CarTypeService(carTypeRepository, mailerService);
const carTypeController = new CarTypeController(carTypeService, jwtService);
const carTypeRouter = new CarTypeRouter(router, auth, carTypeController);

export { carTypeRouter, CarTypeDao };
