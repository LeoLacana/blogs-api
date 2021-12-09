const User = (sequelize, Datatypes) => {
  const userData = sequelize.define('User', {
    id: { type: Datatypes.INTEGER, primaryKey: true, autoIncrement: true },
    displayName: Datatypes.STRING,
    email: Datatypes.STRING,
    password: Datatypes.STRING,
    image: Datatypes.STRING,
  },
  {
    tableName: 'Users',
    timestamps: false,
  });
  return userData;
};

module.exports = User;