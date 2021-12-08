const Categories = (sequelize, Datatypes) => {
  const categoriesData = sequelize.define('Categories', {
    id: { type: Datatypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: Datatypes.STRING,
  },
  {
    tableName: 'Categories',
    timestamps: false,
  });
  return categoriesData;
};

module.exports = Categories;