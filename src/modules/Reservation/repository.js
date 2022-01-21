/* eslint-disable no-return-await */
import bcrypt from 'bcrypt';

class ReservationRepository {
  constructor(reservationDao) {
    this.reservationDAO = reservationDao;
  }

  async findAll() {
    return await this.reservationDAO.findAll();
  }

  async create(reservationEntity) {
    return await this.reservationDAO.create(reservationEntity);
  }

  async findById(reservationEntity) {
    return await this.reservationDAO.findOne({ where: { id: reservationEntity.id } });
  }

  async findByUser(reservationEntity) {
    return await this.reservationDAO.findAll({ where: { UserId: reservationEntity.UserId } });
  }

  async update(reservationEntity) {
    return await this.reservationDAO.update(reservationEntity);
  }

  async delete(reservationEntity) {
    return await this.reservationDAO.delete(reservationEntity);
  }
}

export default ReservationRepository;
