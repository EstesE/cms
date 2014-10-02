import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
	location: config.locationType
});

Router.map(function() {
	// this.route('app');
	//this.resource('states');
	this.resource('states', function(){
		this.resource('state', { path: ':name' });
	});

	this.resource('properties', function() {
		this.resource('property', { path: ':name' });
	});

	//this.resource('properties');
	// this.route('property');
	//this.route('state');
});

export default Router;