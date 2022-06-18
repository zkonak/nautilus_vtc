class ReservationEntity {
  constructor({
    id, dateDepart, timeDepart, addressDepart, addressDestination, price, tax, priceKm, packageService,
    dateDestination, timeDestination, UserId, ServiceId, PackageId, CarTypeId,
  }) {
    this.id = id;
    this.dateDepart = dateDepart;
    this.timeDepart = timeDepart;
    this.addressDepart = addressDepart;
    this.addressDestination = addressDestination;
    this.price = price;
    this.tax = tax;
    this.priceKm = priceKm;
    this.packageService = packageService;
    this.dateDestination = dateDestination;
    this.timeDestination = timeDestination;
    this.UserId = UserId;
    this.CarTypeId = CarTypeId;
    this.ServiceId = ServiceId;
    this.PackageId = PackageId;
  }

   validate() {
  //   if (!this.dateDepart || !this.timeDepart || !this.addressDepart || !this.addressDestination || !this.price || !this.UserId || !this.CarTypeId) return false;
     return true;
 }
}

export default ReservationEntity;
