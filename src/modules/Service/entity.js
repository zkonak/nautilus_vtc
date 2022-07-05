class ServiceEntity {
  constructor({
    id, name, description, price, CarTypeId,
  }) {
    this.id = id;
    this.name = name;

    this.description = description;
    this.price = price;
    this.CarTypeId = CarTypeId;
  }

  validate() {
   //if ( !this.name || !this.description || !this.price || !this.CarTypeId) return false;
    return true;
  }
}

export default ServiceEntity;
