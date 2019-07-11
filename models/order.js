var mongoose = require('mongoose');
var Schema=mongoose.Schema;

var orderSchema = new Schema9({
    user:{
        type: Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },

    products:[{
        type: Schema.Types.ObjectId,
        ref: 'product',
        required: true
    }]
},
{
    timestamps: true
});

var Order = mongoose.model('Order', orderSchema);
module.exports = Order;