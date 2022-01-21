// import {Model, DataTypes} from 'sequelize';

import pkg from 'sequelize';
import db from '../../config/database';

const { Model, DataTypes } = pkg;

class PackageDao extends Model {
  static init(sequelize) {
    return super.init({
      name: DataTypes.STRING,
      addressDepart: DataTypes.STRING,
      addressDestination: DataTypes.STRING,
      description: DataTypes.STRING,
      price: DataTypes.FLOAT,
    }, { sequelize, modelName: 'Package' });
  }

  static associate(models) {
    // define association here
    this.belongsTo(models.CarType);
    return this;
  }
}

PackageDao.init(db.sequelize);

export default PackageDao;
