'use strict';

import {Doc} from '../../models/models';
import {Database} from '../../models/models';

// Defines the state of the application
var AppState = can.Map.extend({
	define : {

		databases: {
			value: new Database.List({}),
			serialize:false
		},

		database:{
			set(value){
				console.log('Database: ' + value);
				return value;
			}
		},

		collections: {
			get() {
				return 'collections';
			},
			serialize:false
		},

		collection:{
			set(value){
				console.log('Collection: ' + value);
				this.attr('docs', new Doc.List({'database':this.attr('database'), 'collection':value}));
				return value;
			}
		},

		docs: {
			value: new Doc.List(),
			set(value){
				value.done(function(docs){
					console.log(docs);
				})
			},
			serialize:false
		},

		document_id:{}

	},

});

var appState = new AppState();
export default appState;
window.appState = appState;

can.route.map(appState);
