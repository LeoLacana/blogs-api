module.exports = (sequelize, Datatypes) => {
  const BlogPosts = sequelize.define('BlogPosts', {
    id: { type: Datatypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: Datatypes.STRING,
    content: Datatypes.STRING,
    userId: Datatypes.INTEGER,
  }, {
    timestamps: true,
  });
  // BlogPosts.associate = (models) => {
  //   BlogPosts.belongsTo(models.Users, {
  //     foreignKey: 'userId',
  //     as: 'user',
  //   });
  // };
  return BlogPosts;
}; 