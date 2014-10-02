import Ember from 'ember';

export default Ember.Route.extend({
	model: function(property) {
		return Ember.$.getJSON('http://localhost:4000/properties/' + property.name, function (json) {
			console.log('Returning a single property from the API:');
            console.log(json);
        });
	}
});
