var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var product_typeSchema = new Schema({
  name: {
    type: String,
    required: true,
    default: false
  }
},
{
  timestamps: true
});

var Products_type = mongoose.model("Product_type", product_typeSchema);
module.exports = Products_type;
