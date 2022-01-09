import { Model } from 'sequelize';
interface TimeAttributes {
  id: string;
  timeId: string;
  time: string;
}
module.exports = (sequelize: any, DataTypes: any) => {
  class Time extends Model<TimeAttributes> {
    static associate(models: any) {}
  }
  Time.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.STRING,
      },
      timeId: DataTypes.STRING,
      time: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Time',
    }
  );
  return Time;
};
