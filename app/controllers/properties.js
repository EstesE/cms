import Ember from 'ember';

export default Ember.ArrayController.extend({
	actions: {
		setSortable: function() {
			console.log('Make images sortable...from the Properties controller!');
		}
	}
});
