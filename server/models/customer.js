var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var uniqueValidator = require('mongoose-unique-validator');

var CustomerSchema = new mongoose.Schema({
	id: {},
	name: { type: String, required: true, unique: true, uniqueCaseInsensitive: true },
	_order: [{ type: Schema.Types.ObjectId, ref: 'Order'}],
	created_at: Date
})
var Customer = mongoose.model('Customer', CustomerSchema);

CustomerSchema.plugin(uniqueValidator);