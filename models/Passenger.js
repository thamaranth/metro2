var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Passenger Model
 * ==========
 */
var Passenger = new keystone.List('Passenger');

Passenger.add({
	name: { type: Types.Name, required: true, index: true },
	station: { type: Types.Relationship, ref: 'Station' },
	train: { type: Types.Relationship, ref: 'Train' },
	destination: {type: Types.Relationship, ref: 'Station'},
	ticket: { type: Boolean, intial: false, index: true },
	email: { type: Types.Email, initial: true, required: true, unique: true, index: true },
	password: { type: Types.Password, initial: true, required: true },
}, 'Permissions', {
	isAdmin: { type: Boolean, label: 'Can access Keystone', index: true },
});

// Provide access to Keystone
Passenger.schema.virtual('canAccessKeystone').get(function () {
	return this.isAdmin;
});


/**
 * Registration
 */
Passenger.defaultColumns = 'name, email, isAdmin';
Passenger.register();
