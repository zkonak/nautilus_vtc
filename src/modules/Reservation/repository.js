/* eslint-disable no-return-await */
import { UserDao } from "../User";
import { PaymentDao } from '../Payment';

class ReservationRepository {
  constructor(reservationDao) {
    this.reservationDAO = reservationDao;
  }

  async findAll() {
    return await this.reservationDAO.findAll({include: [{
      model: PaymentDao,
    }], });
  }

  async create(reservationEntity) {
    return await this.reservationDAO.create(reservationEntity);
  }

  async findById(reservationEntity) {
    return await this.reservationDAO.findOne({
      where: { id: reservationEntity.id },
      include: [{
        model: UserDao,
      }],
    });
  }

  async findByUser(reservationEntity) {
    return await this.reservationDAO.findAll({ where: { UserId: reservationEntity.UserId },include: [{
      model: PaymentDao,
    }], });
  }

  async update(reservationEntity) {
    return await this.reservationDAO.update(reservationEntity);
  }

  async delete(reservationEntity) {
    return await this.reservationDAO.delete(reservationEntity);
  }
}

export default ReservationRepository;
