import {Router} from 'express';
import {jwtService, mailerService} from '../../libs';
import {auth} from '../../middlewares';


import PaymentDao from './dao';
import PaymentRepository from './repository';
import PaymentService from './service';
import PaymentController from './controller';
import PaymentRouter from './router';

const router = Router();

const paymentRepository = new PaymentRepository(PaymentDao);
const paymentService = new PaymentService(paymentRepository, mailerService);
const paymentController = new PaymentController(paymentService, jwtService);
const paymentRouter = new PaymentRouter(router, auth, paymentController);

export {paymentRouter, PaymentDao};