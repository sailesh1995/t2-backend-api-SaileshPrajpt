var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var orderStatusSchema = new Schema({
  
    orderStatusDescription:{
        type: String,
        default:""
    },
    
},
{
    timestamps: true
}
);
var OrderStatus = mongoose.model('OrderStatus', orderStatusSchema);
module.exports = OrderStatus;