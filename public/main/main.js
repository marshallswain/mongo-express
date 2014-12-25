'use strict';

import './mustache-helpers';
import './routes';

/* * * Fixtures * * */
import './fixtures/databases';
import './fixtures/documents';

/* * * Components * * */
import './components/page-server/page-server';
import './components/page-database/page-database';
import './components/page-collection/page-collection';
import './components/query-builder/query-builder';
import './components/code-editor/code-editor';

/* * * Main Application State * * */
import appState from './appState';

$(document.body).append( can.view('main/site.stache', appState) );


// When the page changes, change the main content.
appState.bind('page', function(ev, newVal){
  if(newVal) {
    var template =  '<page-'+newVal+'></page-'+newVal+'>';
    $('#content').html(  can.stache( template )( appState ) );
  }
});

can.route.ready();

