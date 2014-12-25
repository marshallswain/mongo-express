/* * * Auth * * */
can.route('passwordemail/:email',{page: 'passwordemail'});
can.route('passwordchange/:secret',{page: 'passwordchange'});
can.route('verify/:secret',{page: 'verify'});
// can.route(':page',{page: 'overview'});


/* * * Overview * * */
can.route('', {'page':'server'});
can.route('settings', {'page':'settings'});
can.route('help', {'page':'help'});

can.route(':database', {'page':'database'});
can.route(':database/:collection', {'page':'collection'});
can.route(':database/:collection/:document_id', {'page':'document'});

