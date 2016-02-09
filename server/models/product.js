var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProductSchema = new mongoose.Schema({
	id: {},
	name: String,
	description: String,
	quantity: Number,
	_order: [{ type: Schema.Types.ObjectId, ref: 'Order'}],
	created_at: Date
})
var Product = mongoose.model('Product', ProductSchema);