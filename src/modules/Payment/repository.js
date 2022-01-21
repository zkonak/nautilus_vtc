/* eslint-disable no-return-await */
import bcrypt from 'bcrypt';

class PaymentRepository {
  constructor(paymentDao) {
    this.paymentDAO = paymentDao;
  }

  async findAll() {
    return await this.paymentDAO.findAll();
  }

  async create(paymentEntity) {
    return await this.paymentDAO.create(paymentEntity);
  }

  async findById(paymentEntity) {
    return await this.paymentDAO.findOne({ where: { id: paymentEntity.id } });
  }

  async findByReservation(paymentEntity) {
    return await this.paymentDAO.findAll({ where: { ReservationId: paymentEntity.ReservationId } });
  }

  async update(paymentEntity) {
    return await this.paymentDAO.update(paymentEntity);
  }
}

export default PaymentRepository;
