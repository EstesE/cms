import Ember from 'ember';

export default Ember.View.extend({

	templateName: 'property',

	willInsertElement: function() {
		console.log('Property -> willInsertElement');
	},
	didInsertElement: function() {
		console.log('Property -> didInsertElement');
	},
	parentViewDidChange: function() {
		console.log('Property -> parentViewDidChange');
	},
	willDestroyElement: function() {
		console.log('Property -> willDestroyElement');
	},
	willClearRender: function() {
		console.log('Property -> willClearRender');
	}

});
