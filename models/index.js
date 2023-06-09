// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE'
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id',


});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: {
    model: ProductTag,
    // unique: false // Ask later if this is a necessary addition
  },
  as: 'tags_products' // not super sure if this is ncessary
})

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: {
    model: ProductTag,
  },
  as: 'products_tags' // also not super sure about this one
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
