var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * User Model
 * ==========
 */
var Train = new keystone.List('Train');

Train.add({
	name: { type: Types.Name, required: true, index: true },
	nextStation: { type: Types.Relationship, ref: 'Station'},
	capacity: { type: Types.Number, initial: 100, required: true },
	atStation: { type: Boolean, label: 'Can access Keystone', index: true },
	passengers: { type: Types.Relationship, ref: 'Passenger', many: true}
});

// Provide access to Keystone
Train.schema.virtual('isFull').get(function () {
	return this.capacity < 1;
});


/**
 * Registration
 */
Train.defaultColumns = 'name, email, isAdmin';
Train.register();
