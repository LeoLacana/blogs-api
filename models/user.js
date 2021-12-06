const User = (sequelize, Datatypes) => {
  const userData = sequelize.define('User', {
    displayName: Datatypes.STRING,
    email: Datatypes.STRING,
    password: Datatypes.STRING,
    image: Datatypes.STRING,
  },
  {
    timestamps: false,
  });
  return userData;
};

module.exports = User;