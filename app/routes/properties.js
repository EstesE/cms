import Ember from 'ember';

export default Ember.Route.extend({
	model: function () {
        return Ember.$.getJSON('http://localhost:4000/properties', function (json) {
            console.log(json);
        });
    }
});
