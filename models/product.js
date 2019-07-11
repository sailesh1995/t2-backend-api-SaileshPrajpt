var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var productSchema = new Schema({
  product_name: {
    type: String,
    required: true,
    default: false
  },

  product_type: {
    type: Schema.Types.ObjectId,
    ref: 'product_type',
    required: true
  },

    product_description: {
      type: String,
      required: true
    },

  product_price: {
    type: String,
    required: true
  },

  quantity: {
    type: Number,
    required: true
  },

  product_image:{
    type: String,
    required: ''
  }
},
{
  timestamps: true
});

var Products = mongoose.model("Product", productSchema);
module.exports = Products;
