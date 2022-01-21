class UserEntity {
  constructor({
    id, mail, password, name, lastname, address, tel, type,
  }) {
    this.id = id;
    this.name = name;
    this.lastname = lastname;
    this.mail = mail;
    this.password = password;
    this.address = address;
    this.tel = tel;
    this.type = type;
  }

  validate() {
    if (!this.mail || !this.password || !this.name || !this.lastname || !this.address || !this.tel || !this.lastname) return false;
    return true;
  }

  validateLogin() {
    if (!this.mail || !this.password) return false;
    return true;
  }
}

export default UserEntity;
