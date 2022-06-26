/* eslint-disable no-param-reassign */
/* eslint-disable class-methods-use-this */
import ReservationEntity from './entity';
import { ApiError } from '../../helpers/error';
import ServiceRepository from '../Service/repository';

class ReservationService {
  constructor(reservationRepository, mailerService) {
    this.reservationRepo = reservationRepository;
    this.mailerService = mailerService;
  }

  async getAll() {
    const reservations = await this.reservationRepo.findAll();
    return reservations;
  }

  async register(reservationData) {
    const reservationEntity = new ReservationEntity(reservationData);
    if (!reservationEntity.validate()) { throw new ApiError(400, 'Missing  fields'); }

    const newReservation = await this.reservationRepo.create(reservationEntity);
    // await this.mailerService.sendMail(reservationEntity);
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

  async calcul(reservationData) {
    const distance = 10; // todo --calculation
    const prices = reservationData.gamme;
    console.log(reservationData);
    // eslint-disable-next-line array-callback-return
    if (reservationData.reservation.type === '1') {
      prices.map((item) => {
        const price = item.priceKm * distance;
        item.price = price;

        prices[item.typeName] = price;
        prices.carTypeId = item.id;
      });
    } else if (reservationData.type === '2') {
      prices.map((item) => {
        item.typeName = item.CarType.typeName;
      });
    } else if (reservationData.type === '3') {
      prices.map((item) => {
        const { price } = item;
        prices[item.typeName] = price;
        prices.carTypeId = item.carTypeId;
      });
    }
    console.log('response', prices);

    return prices;
  }
}

export default ReservationService;
