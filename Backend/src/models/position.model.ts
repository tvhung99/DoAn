import { Model } from 'sequelize';
interface PositionAttributes {
  id: string;
  positionId: string;
  position: string;
}
module.exports = (sequelize: any, DataTypes: any) => {
  class Position extends Model<PositionAttributes> {
    static associate(models: any) {}
  }
  Position.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.STRING,
      },
      positionId: DataTypes.STRING,
      position: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Position',
    }
  );
  return Position;
};
