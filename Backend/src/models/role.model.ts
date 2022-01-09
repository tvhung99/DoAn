import { Model } from 'sequelize';
interface RoleAttributes {
  id: string;
  roleId: string;
  role: string;
}
module.exports = (sequelize: any, DataTypes: any) => {
  class Role extends Model<RoleAttributes> {
    static associate(models: any) {
      // this.hasMany(models.User);
    }
  }
  Role.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.STRING,
      },
      roleId: DataTypes.STRING,
      role: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Role',
    }
  );
  return Role;
};
