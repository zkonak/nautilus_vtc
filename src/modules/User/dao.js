// import {Model, DataTypes} from 'sequelize';

import pkg from 'sequelize';
import db from '../../config/database';

const { Model, DataTypes } = pkg;

class UserDao extends Model {
  static init(sequelize) {
    return super.init({
      mail: DataTypes.STRING,
      password: DataTypes.STRING,
      name: DataTypes.STRING,
      lastname: DataTypes.STRING,
      address: DataTypes.STRING,
      tel: DataTypes.STRING,
      type: DataTypes.STRING,

    }, { sequelize, modelName: 'User' });
  }

  static associate(models) {
    // define association here
    // this.belongsTo(models.Service);
    return this;
  }
}

UserDao.init(db.sequelize);

export default UserDao;
