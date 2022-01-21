class PackageEntity {
  constructor({
    id, paymentType, totalPrice, facture, ReservationId,
  }) {
    this.id = id;
    this.paymentType = paymentType;
    this.totalPrice = totalPrice;
    this.facture = facture;
    this.ReservationId = ReservationId;
  }

  validate() {
    if (!this.paymentType || !this.totalPrice || !this.ReservationId) return false;
    return true;
  }
}

export default PackageEntity;
