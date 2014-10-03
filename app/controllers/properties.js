import Ember from 'ember';

export default Ember.ArrayController.extend({
	actions: {
		setSortable: function() {
			console.log('Make images sortable...from the Properties controller!');

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
