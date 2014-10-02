import Ember from "ember";

export default Ember.Route.extend({
	model: function(state) {
		console.log('STATE');
		console.log(state);
		return Ember.$.getJSON('http://localhost:4001/states/' + state.name, function (json) {
            console.log(json);
        });
	}
});