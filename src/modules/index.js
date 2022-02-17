import { userRouter } from './User';
import { carTypeRouter } from './CarType';
import { packageRouter } from './Package';
import { serviceRouter } from './Service';
import { reservationRouter } from './Reservation';
import { paymentRouter } from './Payment';

const routes = [userRouter, carTypeRouter, packageRouter, serviceRouter, reservationRouter, paymentRouter];

export default routes;
