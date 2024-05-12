// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: "category_id"
})
// Categories have many Products
Category.hasMany(Product,{
  onDelete: "SET NULL"
})
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tags, {
  through: ProductTag,
  foreignKey: 'tag_id',
  as: '' // idk what to put here 
})
// Tags belongToMany Products (through ProductTag)
Tas.belongsToMany(Product,{
  through: ProductTag,
  foreignKey: 'tag_id', // not sure what to put here
  as: '' // or here
})
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
