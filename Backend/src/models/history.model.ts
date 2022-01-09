import { Model } from 'sequelize';
interface HistoryAttributes {
  id: string;
  patientId: string;
  doctorId: string;
  description: string;
  files: string;
}
module.exports = (sequelize: any, DataTypes: any) => {
  class History extends Model<HistoryAttributes> {
    static associate(models: any) {}
  }
  History.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.STRING,
      },
      patientId: DataTypes.STRING,
      doctorId: DataTypes.STRING,
      description: DataTypes.STRING,
      files: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'History',
    }
  );
  return History;
};
