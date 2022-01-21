class PackageEntity {
  constructor({
    id, name, addressDepart, addressDestination, description, price,CarTypeId
  }) {
    this.id = id;
    this.name = name;
    this.addressDepart = addressDepart;
    this.addressDestination = addressDestination;
    this.description = description;
    this.price = price;
    this.CarTypeId=CarTypeId;
  }

  validate() {
    if (!this.name || !this.addressDepart || !this.addressDestination || !this.price|| !this.CarTypeId) return false;
    return true;
  }
}

export default PackageEntity;
