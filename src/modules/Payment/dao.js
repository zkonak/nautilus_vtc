// import {Model, DataTypes} from 'sequelize';

import pkg from 'sequelize';
import db from '../../config/database';

const { Model, DataTypes } = pkg;

class PaymentDao extends Model {
  static init(sequelize) {
    return super.init({
      paymentType: DataTypes.STRING,
      totalPrice: DataTypes.FLOAT,
      facture: DataTypes.BLOB,

    }, { sequelize, modelName: 'Payment' });
  }

  static associate(models) {
    // define association here
    this.belongsTo(models.Reservation);
    return this;
  }
}

PaymentDao.init(db.sequelize);

export default PaymentDao;
