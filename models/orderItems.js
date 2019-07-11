var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var orderItemSchema = new Schema({
    order:{
        type:Schema.Types.ObjectId,
        ref: 'order',
        required: true
    },
    product:{
        type: Schema.Types.ObjectId,
        ref: 'product',
        required: true
    },
    quantity:{
        type: Number,
        required: true
    },
    price:{
        type: Number,
        required: true
    }
},
{
    timestamps: true
}
);
var OrderItem = mongoose.model('OrderItem', orderItemSchema);
module.exports = OrderItem;