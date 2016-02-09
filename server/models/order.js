var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var OrderSchema = new mongoose.Schema({
	id: {},
	customer: { type: Schema.Types.ObjectId, ref: 'Customer' },
	product: { type: Schema.Types.ObjectId, ref: 'Product' },
	quantity: { type: Number, default: 1 },
	created_at: { type: Date, default: new Date() }
})
var Order = mongoose.model('Order', OrderSchema);