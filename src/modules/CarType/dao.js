// import {Model, DataTypes} from 'sequelize';

import pkg from 'sequelize';
import db from '../../config/database';

const { Model, DataTypes } = pkg;

class CarTypeDao extends Model {
  static init(sequelize) {
    return super.init({
      typeName: DataTypes.STRING,
      priceKm: DataTypes.FLOAT,
    }, { sequelize, modelName: 'CarType' });
  }

  static associate(models) {
    // define association here
    // this.belongsTo(models.Service);
    return this;
  }
}

CarTypeDao.init(db.sequelize);

export default CarTypeDao;
