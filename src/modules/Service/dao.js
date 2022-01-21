// import {Model, DataTypes} from 'sequelize';

import pkg from 'sequelize';
import db from '../../config/database';

const { Model, DataTypes } = pkg;

class ServiceDao extends Model {
  static init(sequelize) {
    return super.init({
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      price: DataTypes.FLOAT,
    }, { sequelize, modelName: 'Service' });
  }

  static associate(models) {
    // define association here
    this.belongsTo(models.CarType);
    return this;
  }
}

ServiceDao.init(db.sequelize);

export default ServiceDao;
