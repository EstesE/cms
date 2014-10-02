import Ember from "ember";

export default Ember.Route.extend({
	/*model: function() {
		return Ember.$.getJSON('http://localhost:4001/states', function (json) {
            console.log(json);
        });
	}*/

	model: function() {
		return states;
	}

});


var states = [{
          "_id" : "53dc0aecde4be108724cd5fa",
          "abbreviation" : "AL",
          "name" : "Alabama"
     }, {
          "_id" : "53dc0aecde4be108724cd5fe",
          "abbreviation" : "AZ",
          "name" : "Arizona"
     }, {
          "_id" : "53dc0aecde4be108724cd602",
          "abbreviation" : "AR",
          "name" : "Arkansas"
     }, {
          "_id" : "53dc0aecde4be108724cd606",
          "abbreviation" : "CA",
          "name" : "California"
     }, {
          "_id" : "53dc0aecde4be108724cd60a",
          "abbreviation" : "FL",
          "name" : "Florida"
     }, {
          "_id" : "53dc0aecde4be108724cd60e",
          "abbreviation" : "GA",
          "name" : "Georgia"
     }, {
          "_id" : "53dc0aecde4be108724cd612",
          "abbreviation" : "IN",
          "name" : "Indiana"
     }, {
          "_id" : "53dc0aecde4be108724cd616",
          "abbreviation" : "MA",
          "name" : "Massachusetts"
     }, {
          "_id" : "53dc0aecde4be108724cd61a",
          "abbreviation" : "MI",
          "name" : "Michigan"
     }, {
          "_id" : "53dc0aecde4be108724cd61e",
          "summary" : "",
          "abbreviation" : "MS",
          "name" : "Mississippi"
     }, {
          "_id" : "53dc0aecde4be108724cd622",
          "abbreviation" : "NH",
          "name" : "New Hampshire"
     }, {
          "_id" : "53dc0aecde4be108724cd626",
          "abbreviation" : "NC",
          "name" : "North Carolina"
     }, {
          "_id" : "53dc0aecde4be108724cd62a",
          "abbreviation" : "OH",
          "name" : "Ohio"
     }, {
          "_id" : "53dc0aecde4be108724cd62e",
          "abbreviation" : "RI",
          "name" : "Rhode Island"
     }, {
          "_id" : "53dc0aecde4be108724cd632",
          "abbreviation" : "SC",
          "name" : "South Carolina"
     }, {
          "_id" : "53dc0aecde4be108724cd636",
          "abbreviation" : "TX",
          "name" : "Texas"
     }, {
          "_id" : "53dc0aecde4be108724cd63a",
          "abbreviation" : "VA",
          "name" : "Virginia"
     }
];