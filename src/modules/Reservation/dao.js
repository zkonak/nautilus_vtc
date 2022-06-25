//import {Model, DataTypes} from 'sequelize';

import pkg from 'sequelize';
const {Model, DataTypes} = pkg;
import db from '../../config/database';

class ReservationDao extends Model {
    static init(sequelize) {
        return super.init(
            {   dateDepart:DataTypes.DATE,
                timeDepart:DataTypes.STRING,
                addressDepart: DataTypes.STRING,
                addressDestination: DataTypes.STRING,
                price: DataTypes.FLOAT,
                tax:DataTypes.FLOAT,
                priceKm: DataTypes.FLOAT,
                packageService:DataTypes.STRING,
                dateDestination:DataTypes.DATE,
                timeDestination:DataTypes.STRING,


           }, {sequelize, modelName: 'Reservation'}
        );
    }
    static associate(models) {
         // define association here
          this.belongsTo(models.CarType);
          this.belongsTo(models.User);
          this.belongsTo(models.Service);
          this.belongsTo(models.Package);
          this.hasOne(models.Payment)
        return this;
    }
};

ReservationDao.init(db.sequelize);

export default ReservationDao;