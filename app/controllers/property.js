import Ember from 'ember';

export default Ember.ObjectController.extend({

	property: function(model) {
		this.set('model', model);
	},

	actions: {
		openModal: function() {
			console.log('Property -> Modal');
		},
		setSortable: function() {
			console.log('Make images sortable...from the Property controller:');
		}
	}

});
