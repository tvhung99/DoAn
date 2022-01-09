import { Model } from 'sequelize';
interface SpecialtyAttributes {
  id: string;
  description: string;
  name: string;
  image: string;
}
module.exports = (sequelize: any, DataTypes: any) => {
  class Specialty extends Model<SpecialtyAttributes> {
    static associate(models: any) {}
  }
  Specialty.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.STRING,
      },
      description: DataTypes.STRING,
      name: DataTypes.STRING,
      image: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Specialty',
    }
  );
  return Specialty;
};
