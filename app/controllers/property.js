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

			Ember.$('.sortable').sortable();
			Ember.$('.handles').sortable({
				handle: 'span'
			});
			Ember.$('.connected').sortable({
				connectWith: '.connected'
			});
			Ember.$('.exclude').sortable({
				items: ':not(.disabled)'
			});

			Ember.$('.sortable').sortable().bind('sortupdate', function () {
				console.log('Sort has been updated');
			});
		}
	}

});
