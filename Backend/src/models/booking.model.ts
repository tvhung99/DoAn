import { Model } from 'sequelize';
interface BookingAttributes {
  id: string;
  statusId: string;
  doctorId: string;
  patientId: string;
  date: number;
  timeId: string;
}
module.exports = (sequelize: any, DataTypes: any) => {
  class Position extends Model<BookingAttributes> {
    static associate(models: any) {}
  }
  Position.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.STRING,
      },
      statusId: DataTypes.STRING,
      doctorId: DataTypes.STRING,
      patientId: DataTypes.STRING,
      date: DataTypes.INTEGER,
      timeId: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Position',
    }
  );
  return Position;
};
