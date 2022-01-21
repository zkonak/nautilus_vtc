class CarTypeEntity {
  constructor({ id, typeName, priceKm }) {
    this.id = id;
    this.typeName = typeName;
    this.priceKm = priceKm;
  }

  // validate() {
  //     if (!this.email || !this.password)
  //         return false;
  //     else
  //         return true;
  // }
}

export default CarTypeEntity;
