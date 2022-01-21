import ReservationEntity from './entity';
import { ApiError } from '../../helpers/error';

class ReservationService {
  constructor(reservationRepository, mailerService) {
    this.reservationRepo = reservationRepository;
    this.mailerService = mailerService;
  }

  async getAll() {
    const reservations = await this.reservationRepo.findAll();
    return reservations.map((pack) => new ReservationEntity(pack));
  }

  async register(reservationData) {
    const reservationEntity = new ReservationEntity(reservationData);
    if (!reservationEntity.validate()) { throw new ApiError(400, 'Missing  fields'); }

    const newReservation = await this.reservationRepo.create(reservationEntity);
    //await this.mailerService.sendMail(reservationEntity);
    return new ReservationEntity(newReservation);
  }

  async getOne(reservationData) {
    const reservationEntity = new ReservationEntity(reservationData);
    const reservation = await this.reservationRepo.findById(reservationEntity);
    return reservation;
  }

  async getAllByUser(reservationData) {
    const reservationEntity = new ReservationEntity(reservationData);
    const reservation = await this.reservationRepo.findByUser(reservationEntity);
    return reservation;
  }

  async update(reservationData) {
    const reservationEntity = new ReservationEntity(reservationData);
    if (!reservationEntity.validate()) { throw new ApiError(400, 'Missing required  fields'); }
    const reservation = await this.reservationRepo.findById(reservationEntity);

    const reservationUpdated = reservation.update(reservationEntity);
    return reservationUpdated;
  }

  async delete(reservationData) {
    const reservationEntity = new ReservationEntity(reservationData);
    const reservation = await this.reservationRepo.findById(reservationEntity);

    const reservationDeleted = reservation.delete(reservationEntity);
    return reservationDeleted;
  }
}

export default ReservationService;
