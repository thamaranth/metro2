var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Station Model
 * ==========
 */
var Station = new keystone.List('Station');

Station.add({
	location: { type: Types.Name, required: true, index: true },
	passengers: { type: Types.Relationship, ref: 'Passenger', many: true },
	previous: { type: Types.Relationship, ref: 'Station'},
});

// Provide access to Keystone
Station.schema.virtual('nextStationFor').get(function () {
	return this.previous;
});


/**
 * Registration
 */
Station.defaultColumns = 'name, email, isAdmin';
Station.register();
