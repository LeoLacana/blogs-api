const PostsCategories = (sequelize, _Datatypes) => {
  const postcategory = sequelize.define('PostsCategories',
  {},
  { timestamps: false, tableName: 'PostsCategories' });
  
  postcategory.associate = (models) => {
    models.BlogPosts.belongsToMany(models.Categories, {
      as: 'categories',
      through: 'PostsCategories',
      foreignKey: 'postId',
      otherKey: 'categoryId',
    });
    models.Categories.belongsToMany(models.BlogPosts, {
      as: 'blogPosts',
      through: 'PostsCategories',
      foreignKey: 'categoryId',
      otherKey: 'postId',
    });
  };
  return postcategory;
};

module.exports = PostsCategories;