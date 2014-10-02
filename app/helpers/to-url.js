import Ember from 'ember';

function toUrl(value) {
	return value.replace(/\s+/g, '-').toLowerCase();
}

export {
  toUrl
};

export default Ember.Handlebars.makeBoundHelper(toUrl);
