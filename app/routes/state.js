import Ember from "ember";

export default Ember.Route.extend({
	model: function(state) {
		return Ember.$.getJSON('http://localhost:4000/states/' + state.name, function (json) {
			console.log('Returning single state from API:');
            console.log(json);
        });
	}
});