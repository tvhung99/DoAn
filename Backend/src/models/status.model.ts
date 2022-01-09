import { Model } from 'sequelize';
interface StatusAttributes {
  id: string;
  statusId: string;
  status: string;
}
module.exports = (sequelize: any, DataTypes: any) => {
  class Status extends Model<StatusAttributes> {
    static associate(models: any) {}
  }
  Status.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.STRING,
      },
      statusId: DataTypes.STRING,
      status: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Status',
    }
  );
  return Status;
};
