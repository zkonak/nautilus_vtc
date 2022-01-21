import { Router } from 'express';
import { jwtService, mailerService } from '../../libs';
import { auth } from '../../middlewares';

import PackageDao from './dao';
import PackageRepository from './repository';
import PackageService from './service';
import PackageController from './controller';
import PackageRouter from './router';

const router = Router();

const packageRepository = new PackageRepository(PackageDao);
const packageService = new PackageService(packageRepository, mailerService);
const packageController = new PackageController(packageService, jwtService);
const packageRouter = new PackageRouter(router, auth, packageController);

export { packageRouter, PackageDao };
