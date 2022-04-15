/* eslint-disable no-return-await */
import { ReservationDao } from '../Reservation';
import { UserDao } from '../User';

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
    return await this.paymentDAO.findOne({
      where: { id: paymentEntity.id },
      include: [{
        model: ReservationDao,
        include: [{ model: UserDao }],
      }],
    });
  }

  async findByReservation(paymentEntity) {
    return await this.paymentDAO.findAll({ where: { ReservationId: paymentEntity.ReservationId } });
  }

  async update(paymentEntity) {
    return await this.paymentDAO.update(paymentEntity);
  }
}

export default PaymentRepository;
