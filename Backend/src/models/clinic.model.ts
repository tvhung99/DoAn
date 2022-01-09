import { Model } from 'sequelize';
interface ClinicAttributes {
  id: string;
  name: string;
  address: string;
  description: string;
  image: string;
}
module.exports = (sequelize: any, DataTypes: any) => {
  class Clinic extends Model<ClinicAttributes> {
    static associate(models: any) {}
  }
  Clinic.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.STRING,
      },
      name: DataTypes.STRING,
      address: DataTypes.STRING,
      description: DataTypes.STRING,
      image: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Clinic',
    }
  );
  return Clinic;
};
