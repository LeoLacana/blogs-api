const Categories = (sequelize, Datatypes) => {
  const categoriesData = sequelize.define('Categories', {
    name: Datatypes.STRING,
  },
  {
    tableName: 'Categories',
    timestamps: false,
  });
  return categoriesData;
};

module.exports = Categories;