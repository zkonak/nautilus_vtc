import PaymentEntity from './entity';
import { ApiError } from '../../helpers/error';

class PaymentService {
  constructor(paymentRepository, mailerService) {
    this.paymentRepo = paymentRepository;
    this.mailerService = mailerService;
  }

  async getAll() {
    const payments = await this.paymentRepo.findAll();
    return payments.map((pack) => new PaymentEntity(pack));
  }

  async register(paymentData) {
    const paymentEntity = new PaymentEntity(paymentData);
    if (!paymentEntity.validate()) { throw new ApiError(400, 'Missing required  fields'); }

    const newPayment = await this.paymentRepo.create(paymentEntity);
    //await this.mailerService.sendMail(paymentEntity);
    return new PaymentEntity(newPayment);
  }

  async getOne(paymentData) {
    const paymentEntity = new PaymentEntity(paymentData);
    const payment = await this.paymentRepo.findById(paymentEntity);
    return payment;
  }

  async getAllByReservation(paymentData) {
    const paymentEntity = new PaymentEntity(paymentData);
    const payment = await this.paymentRepo.findByReservation(paymentEntity);
    return payment;
  }

  async update(paymentData) {
    const paymentEntity = new PaymentEntity(paymentData);
    if (!paymentEntity.validate()) { throw new ApiError(400, 'Missing required  fields'); }
    const payment = await this.paymentRepo.findById(paymentEntity);

    const paymentUpdated = payment.update(paymentEntity);
    return paymentUpdated;
  }
}

export default PaymentService;
