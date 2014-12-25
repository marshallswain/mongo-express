'use strict';

import appState from '../../appState';

can.Component.extend({
	tag: 'page-server',
	template: can.view('/main/components/page-server/page-server.stache'),
	scope: appState,
	events: {},
	helpers:{}
});
