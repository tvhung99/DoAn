import { Model } from 'sequelize';
interface UserAttributes {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  address: string;
  phoneNumber: string;
  gender: 0 | 1;
  positionId: string;
  roleId: string;
}
module.exports = (sequelize: any, DataTypes: any) => {
  class User extends Model<UserAttributes> {
    static associate(models: any) {
      // this.belongsTo(models.Role, { foreignKey: 'roleId', as: 'role' });
      // this.belongsTo(models.Postition, { foreignKey: 'positionId', as: 'position' });
    }
  }
  User.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.STRING,
      },
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      address: DataTypes.STRING,
      phoneNumber: DataTypes.STRING,
      gender: DataTypes.BOOLEAN,
      positionId: DataTypes.STRING,
      roleId: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'User',
    }
  );
  return User;
};
