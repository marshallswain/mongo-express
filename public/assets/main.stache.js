(function(window) {
 can.stache('main_components_code-editor_code-editor_stache', "<div class=\"record\">\n  <div id=\"editor{{count}}\" class=\"editor\">\n    <i class=\"delete mdi-content-clear pull-right\"></i>\n    <p class=\"_id\">{{id}}</p>\n  </div>\n</div>");
can.stache('main_components_page-collection_page-collection_stache', "<div class=\"row\">\n  <div class=\"col-sm-9 main collection\">\n\n    <div class=\"page-header\">\n\n      <div class=\"breadcrumbs\">\n        <a href=\"javascript:void(0)\" can-click=\"goHome\"><i class=\"mdi-action-dns\"></i></a>\n        <span> / </span>\n        {{#database}}\n        <a href=\"javascript:void(0)\" can-click=\"gotoDB\">{{name}}</a>\n        {{/database}}\n        <span> / </span>\n      </div>\n\n      {{#collection}}\n      <h1>{{name}}</h1>\n      {{/collection}}\n\n      <div class=\"view-tools\">\n        <ul class=\"nav nav-pills pull-right add\">\n          <li><a href=\"javascript:void(0)\"><i class=\"mdi-content-add add-button\"></i></a></li>\n        </ul>\n      </div>\n    </div>\n\n    <query-builder></query-builder>\n\n\n    <div class=\"view-tools pull-right\">\n      <ul class=\"nav nav-pills pull-right\">\n        <li><a href=\"javascript:void(0)\"><i class=\"mdi-content-remove-circle-outline\"></i></a></li>\n      </ul>\n\n      <ul class=\"nav nav-pills pull-right list\">\n        <li><a href=\"javascript:void(0)\"><i class=\"mdi-action-view-list\"></i></a></li>\n      </ul>\n\n      <ul class=\"nav nav-pills pull-right list\">\n        <li><a href=\"javascript:void(0)\"><i class=\"mdi-action-view-agenda\"></i></a></li>\n      </ul>\n    </div>\n\n    <p id=\"editable\" class=\"records-summary\"><strong>1-10</strong> of <strong>19</strong> documents</p>\n\n    <div class=\"records\">\n\n      <code-editor></code-editor>\n\n      <div class=\"record\">\n        <div id=\"editor2\" class=\"editor\">\n          <i class=\"delete mdi-content-clear pull-right\"></i>\n          <p class=\"_id\">ObjectID(\"5359550868cc9b2b372e2ea5\")</p>\n        </div>\n      </div>\n\n      <div class=\"record\">\n        <div id=\"editor3\" class=\"editor\">\n          <i class=\"delete mdi-content-clear pull-right\"></i>\n          <p class=\"_id\">ObjectID(\"5359550868cc9b2b372e2ea5\")</p>\n        </div>\n      </div>\n\n      <div class=\"record\">\n        <div id=\"editor4\" class=\"editor\">\n          <i class=\"delete mdi-content-clear pull-right\"></i>\n          <p class=\"_id\">ObjectID(\"5359550868cc9b2b372e2ea5\")</p>\n        </div>\n      </div>\n\n      <div class=\"record\">\n        <div id=\"editor5\" class=\"editor\">\n          <i class=\"delete mdi-content-clear pull-right\"></i>\n          <p class=\"_id\">ObjectID(\"5359550868cc9b2b372e2ea5\")</p>\n        </div>\n      </div>\n\n      <div class=\"record\">\n        <div id=\"editor6\" class=\"editor\">\n          <i class=\"delete mdi-content-clear pull-right\"></i>\n          <p class=\"_id\">ObjectID(\"5359550868cc9b2b372e2ea5\")</p>\n        </div>\n      </div>\n\n      <div class=\"record\">\n        <div id=\"editor7\" class=\"editor\">\n          <i class=\"delete mdi-content-clear pull-right\"></i>\n          <p class=\"_id\">ObjectID(\"5359550868cc9b2b372e2ea5\")</p>\n        </div>\n      </div>\n\n      <div class=\"record\">\n        <div id=\"editor8\" class=\"editor\">\n          <i class=\"delete mdi-content-clear pull-right\"></i>\n          <p class=\"_id\">ObjectID(\"5359550868cc9b2b372e2ea5\")</p>\n        </div>\n      </div>\n\n      <div class=\"record\">\n        <div id=\"editor9\" class=\"editor\">\n          <i class=\"delete mdi-content-clear pull-right\"></i>\n          <p class=\"_id\">ObjectID(\"5359550868cc9b2b372e2ea5\")</p>\n        </div>\n      </div>\n\n      <div class=\"record\">\n        <div id=\"editor10\" class=\"editor\">\n          <i class=\"delete mdi-content-clear pull-right\"></i>\n          <p class=\"_id\">ObjectID(\"5359550868cc9b2b372e2ea5\")</p>\n        </div>\n      </div>\n\n  </div>\n\n  <div class=\"col-sm-3 col-sm-offset-9 sidebar\">\n    <h4>Collections <i class=\"mdi-action-autorenew pull-right\"></i><i class=\"mdi-content-add pull-right\"></i></h4>\n    <ul class=\"nav nav-sidebar\">\n      <li><a href=\"\">account_shared_names</a></li>\n      <li><a href=\"\">accounts</a></li>\n      <li><a href=\"\">assets</a></li>\n      <li><a href=\"\">budget</a></li>\n      <li><a href=\"\">calendar</a></li>\n      <li><a href=\"\">categories</a></li>\n      <li><a href=\"\">contacts</a></li>\n      <li><a href=\"\">credit_scores</a></li>\n      <li><a href=\"\">debt</a></li>\n      <li><a href=\"\">labels</a></li>\n      <li><a href=\"\">planning</a></li>\n      <li><a href=\"\">preferences</a></li>\n      <li><a href=\"\">reports</a></li>\n      <li><a href=\"\">sessions</a></li>\n      <li><a href=\"\">system.indexes</a></li>\n      <li><a href=\"\">system.users</a></li>\n\n      <li class=\"trash\">\n        <a href=\"javascript:void(0)\">\n          <i class=\"mdi-action-delete\"></i>\n          Trash\n          <i class=\"mdi-content-clear pull-right\" data-toggle=\"modal\" data-target=\"#myModal\"></i>\n        </a>\n      </li>\n\n    </ul>\n  </div>\n</div>\n\n<!-- Modal -->\n<div class=\"modal fade\" id=\"myModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\"><span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span></button>\n        <h4 class=\"modal-title\" id=\"myModalLabel\">Empty Trash?</h4>\n      </div>\n      <div class=\"modal-body\">\n        This will drop the <strong class=\"text-700\">z.mongo-express.trash</strong> collection and all documents in it.  This cannot be undone.\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Cancel</button>\n        <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">Empty Trash</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- END CONTENT -->\n\n\n<script>\n\n  var editor1 = CodeMirror(document.getElementById('editor1'), {\n    value: \"function myScript(){return 100;}\",\n    mode: { name: \"javascript\", json: true },\n    indentUnit: 4,\n    lineNumbers: true,\n    autoClearEmptyLines: true,\n    matchBrackets: true,\n    theme: \"monokai\"\n  });\n\n  var editor2 = CodeMirror(document.getElementById('editor2'), {\n    value: \"function myScript(){return 100;}\",\n    mode: { name: \"javascript\", json: true },\n    indentUnit: 4,\n    lineNumbers: true,\n    autoClearEmptyLines: true,\n    matchBrackets: true,\n    theme: \"monokai\"\n  });\n\n  var editor3 = CodeMirror(document.getElementById('editor3'), {\n    value: \"function myScript(){return 100;}\",\n    mode: { name: \"javascript\", json: true },\n    indentUnit: 4,\n    lineNumbers: true,\n    autoClearEmptyLines: true,\n    matchBrackets: true,\n    theme: \"monokai\"\n  });\n\n  var editor4 = CodeMirror(document.getElementById('editor4'), {\n    value: \"function myScript(){return 100;}\",\n    mode: { name: \"javascript\", json: true },\n    indentUnit: 4,\n    lineNumbers: true,\n    autoClearEmptyLines: true,\n    matchBrackets: true,\n    theme: \"monokai\"\n  });\n\n  var editor5 = CodeMirror(document.getElementById('editor5'), {\n    value: \"function myScript(){return 100;}\",\n    mode: { name: \"javascript\", json: true },\n    indentUnit: 4,\n    lineNumbers: true,\n    autoClearEmptyLines: true,\n    matchBrackets: true,\n    theme: \"monokai\"\n  });\n\n  var editor6 = CodeMirror(document.getElementById('editor6'), {\n    value: \"function myScript(){return 100;}\",\n    mode: { name: \"javascript\", json: true },\n    indentUnit: 4,\n    lineNumbers: true,\n    autoClearEmptyLines: true,\n    matchBrackets: true,\n    theme: \"monokai\"\n  });\n\n  var editor7 = CodeMirror(document.getElementById('editor7'), {\n    value: \"function myScript(){return 100;}\",\n    mode: { name: \"javascript\", json: true },\n    indentUnit: 4,\n    lineNumbers: true,\n    autoClearEmptyLines: true,\n    matchBrackets: true,\n    theme: \"monokai\"\n  });\n\n  var editor8 = CodeMirror(document.getElementById('editor8'), {\n    value: \"function myScript(){return 100;}\",\n    mode: { name: \"javascript\", json: true },\n    indentUnit: 4,\n    lineNumbers: true,\n    autoClearEmptyLines: true,\n    matchBrackets: true,\n    theme: \"monokai\"\n  });\n\n  var editor9 = CodeMirror(document.getElementById('editor9'), {\n    value: \"function myScript(){return 100;}\",\n    mode: { name: \"javascript\", json: true },\n    indentUnit: 4,\n    lineNumbers: true,\n    autoClearEmptyLines: true,\n    matchBrackets: true,\n    theme: \"monokai\"\n  });\n\n  var editor10 = CodeMirror(document.getElementById('editor10'), {\n    value: \"function myScript(){return 100;}\",\n    mode: { name: \"javascript\", json: true },\n    indentUnit: 4,\n    lineNumbers: true,\n    autoClearEmptyLines: true,\n    matchBrackets: true,\n    theme: \"monokai\"\n  });\n\n\n</script>\n\n");
can.stache('main_components_page-database_page-database_stache', "<div class=\"row\">\n\n  <div class=\"col-sm-9 main\">\n    <div class=\"page-header\">\n\n      <div class=\"breadcrumbs\">\n        <a href=\"javascript:void(0)\" can-click=\"home\"><i class=\"mdi-action-dns\"></i></a>\n        <span> / </span>\n      </div>\n\n      {{#database}}\n      <h1>{{name}}</h1>\n\n      <div class=\"view-tools\">\n        <ul class=\"nav nav-pills pull-right\">\n          <li><a href=\"javascript:void(0)\"><i class=\"mdi-content-remove-circle-outline\"></i></a></li>\n        </ul>\n\n        <ul class=\"nav nav-pills pull-right search\">\n          <li><a href=\"javascript:void(0)\"><i class=\"mdi-action-search\"></i></a></li>\n        </ul>\n\n        <ul class=\"nav nav-pills pull-right search\">\n          <li><a id=\"add-col-btn\"  href=\"javascript:void(0)\"><i class=\"mdi-content-add\"></i></a></li>\n        </ul>\n\n        <div id=\"add-col-form\" class=\"form-container well bs-component\">\n          <form class=\"form-inline\" role=\"form\">\n            <div class=\"col-md-12\">\n              <h3>New Collection</h3>\n            </div>\n\n            <div class=\"form-group\">\n              <label for=\"inputEmail\" class=\"col-md-12 control-label\">Name</label>\n              <div class=\"col-md-12\">\n                <div class=\"form-control-wrapper\"><input type=\"text\" class=\"form-control empty\"></div>\n              </div>\n            </div>\n\n            <div class=\"col-md-offset-\">\n              <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n              <button class=\"btn btn-default pull-left\">Cancel</button>\n            </div>\n          </form>\n        </div>\n\n      </div>\n\n    </div>\n\n    <p>{{collections}} collections</p>\n      {{/database}}\n\n\n\n  </div>\n\n  <div class=\"table-responsive collection-table\">\n    <table class=\"table table-striped\">\n      <thead>\n        <tr>\n          <th>#</th>\n          <th>Name</th>\n          <th># Documents</th>\n        </tr>\n      </thead>\n      <tbody>\n\n\n      {{#appState}}\n      {{#each collections}}\n        <tr>\n          <td>{{index @index}}</td>\n          <td>\n            <a href=\"\" can-click=\"openCollection\">{{name}}</a>\n          </td>\n          <td>\n            {{number documents}}\n            <span class=\"table-tools pull-right\">\n              <a href=\"\" class=\"btn-download\"><i class=\"mdi-editor-mode-edit\"></i></a>\n              <a href=\"\" class=\"btn-download\">Export</a>\n              <a href=\"\" class=\"btn-download mdi-material-red delete-button\">Delete</a>\n            </span>\n          </td>\n        </tr>\n      {{/each collections}}\n      {{/appState}}\n\n\n      </tbody>\n    </table>\n  </div>\n\n  <div class=\"col-sm-3 col-sm-offset-9 sidebar\">\n    <h4>Users <i class=\"mdi-action-autorenew pull-right\"></i><i class=\"mdi-content-add pull-right\"></i></h4>\n    <ul class=\"nav nav-sidebar user-list\">\n      <li>\n        <a href=\"\">marshall  <i class=\"mdi-editor-mode-edit pull-right\"></i></a>\n      </li>\n    </ul>\n\n    <h4>Data Usage <i class=\"mdi-action-autorenew pull-right\"></i></h4>\n    <table class=\"sidebar-table\">\n      <tr>\n        <td>dataSize</td>\n        <td>1.16 KB</td>\n      </tr>\n      <tr>\n        <td>indexSize</td>\n        <td>47.9 KB</td>\n      </tr>\n      <tr>\n        <td>fileSize</td>\n        <td>16 MB</td>\n      </tr>\n    </table>\n  </div>\n\n</div>");
can.stache('main_components_page-server_page-server_stache', "{{#appState}}\n\n<div class=\"row\">\n\n  <div class=\"col-sm-9 col-md-10\">\n\n    <div class=\"page-header\">\n      <h1>Favorites</h1>\n\n      <div class=\"view-tools\">\n        <ul class=\"nav nav-pills pull-right view-toggle text-300\">\n          <li class=\"active\"><a href=\"javascript:void(0)\"><i class=\"mdi-action-view-list\"></i></a></li>\n          <li><a href=\"javascript:void(0)\"><i class=\"mdi-action-view-module\"></i></a></li>\n        </ul>\n\n        <ul class=\"nav nav-pills pull-right labels text-300\">\n          <li><a href=\"javascript:void(0)\"><i class=\"mdi-action-label-outline\"></i></a></li>\n        </ul>\n\n        <ul class=\"nav nav-pills pull-right search text-300\">\n          <li><a href=\"javascript:void(0)\"><i class=\"mdi-action-search\"></i></a></li>\n        </ul>\n      </div>\n    </div>\n\n\n    <!-- BEGIN FAVORITES -->\n    <div class=\"row\">\n      <div class=\"tiles col-md-12\">\n        {{#each databases}}\n          {{#if favorite}}\n            <div class=\"tile col-xs-6 col-sm-4 col-md-3 col-lg-2\" can-click=\"selectDB\">\n              <div class=\"tile-inner\">\n\n                <header class=\"tile-tools\">\n                  <span class=\"tile-group-tool col-xs-4\">\n                    <i class=\"mdi-action-label-outline\"></i>\n                  </span>\n                  <span class=\"tile-favorite-tool col-xs-4\">\n                    <i class=\"mdi-action-favorite\"></i>\n                  </span>\n                  <span class=\"tile-color-tool col-xs-4\">\n                    <i class=\"mdi-image-brightness-1\"></i>\n                  </span>\n                </header>\n\n                <footer class=\"tile-info\">\n                  <p>{{name}}</p>\n                  <p>{{collections}} collections</p>\n                </footer>\n              </div>\n            </div>\n          {{/if}}\n        {{/each}}\n\n        <div class=\"tile col-xs-6 col-sm-4 col-md-3 col-lg-2\">\n          <a href=\"/new-database.html\" class=\"tile-inner plain add\">\n            <i class=\"mdi-content-add\"></i>\n          </a>\n        </div>\n\n\n      </div>\n    </div><!-- END OF FAVORITES -->\n\n\n    <!-- BEGIN TILES -->\n    <div class=\"row\">\n      <div class=\"tiles col-md-12\">\n        <h1>Databases</h1>\n\n        {{#each databases}}\n          {{#unless favorite}}\n            <div class=\"tile col-xs-6 col-sm-4 col-md-3 col-lg-2\" can-click=\"selectDB\">\n              <div class=\"tile-inner\">\n\n                <header class=\"tile-tools\">\n                  <span class=\"tile-group-tool col-xs-4\">\n                    <i class=\"mdi-action-label-outline\"></i>\n                  </span>\n                  <span class=\"tile-favorite-tool col-xs-4\">\n                    <i class=\"mdi-action-favorite\"></i>\n                  </span>\n                  <span class=\"tile-color-tool col-xs-4\">\n                    <i class=\"mdi-image-brightness-1\"></i>\n                  </span>\n                </header>\n\n                <footer class=\"tile-info\">\n                  <p>{{name}}</p>\n                  <p>{{collections}} collections</p>\n                </footer>\n              </div>\n            </div>\n          {{/if}}\n        {{/each}}\n\n\n        <div class=\"tile col-xs-6 col-sm-4 col-md-3 col-lg-2\">\n          <a href=\"/new-database.html\" class=\"tile-inner plain add\">\n            <i class=\"mdi-content-add\"></i>\n          </a>\n        </div>\n\n      </div>\n    </div><!-- END OF TILES -->\n\n    <div class=\"table-responsive\">\n      <table class=\"table table-striped\">\n        <thead>\n          <tr>\n            <th>Name</th>\n            <th>Collections</th>\n            <th>Group</th>\n            <th>Size</th>\n          </tr>\n        </thead>\n        <tbody>\n          {{#each databases}}\n            <tr>\n              <td><i class=\"mdi-image-brightness-1\"></i> {{name}} {{#if favorite}}<i class=\"pull-right mdi-action-favorite\"></i>{{/if}}</td>\n              <td>{{collections}} collections</td>\n              <td>{{group}}</td>\n              <td>{{size}} mb</td>\n            </tr>\n          {{/each}}\n        </tbody>\n      </table>\n    </div>\n  </div>\n\n  <div class=\"col-sm-3 col-sm-offset-9 col-md-2 col-md-offset-10 sidebar\">\n    <server-status></server-status>\n  </div>\n</div>\n{{/appState}}");
can.stache('main_components_query-builder_query-builder_stache', "<div class=\"query-wrapper\">\n  <form class=\"form\" role=\"form\">\n\n    <div class=\"query\">\n      <!-- Find --><span class=\"find\"><span>find({</span><span contenteditable class=\"editable params\"></span><span>}<span class=\"fields\">,{<span contenteditable class=\"editable\"></span>}</span>)</span></span>\n      <!-- Skip <--><span class=\"skip query-block\"></--><span>.skip(</span><span contenteditable class=\"editable\">10</span><span>)</span></span>\n      <!-- Limit <--><span class=\"limit query-block\"></--><span>.limit(</span><span contenteditable class=\"editable\">10</span><span>)</span></span>\n      <!-- Explain --><span class=\"explain query-block\">.explain()</span>\n    </div>\n\n    <div class=\"row query-bottom\">\n      <div class=\"col-md-10\">\n        <ul class=\"query-options\">\n          <li>fields</li>\n          <li>skip</li>\n          <li>limit</li>\n          <li>explain</li>\n        </ul>\n      </div>\n\n      <div class=\"col-md-2\">\n        <button type=\"submit\" class=\"btn btn-primary btn-block\">Run</button>\n      </div>\n    </div>\n\n  </form>\n</div>");
can.stache('main_components_server-status_server-status_stache', "<h4>Server Status <i class=\"mdi-action-autorenew pull-right\"></i></h4>\n<dl>\n  <dt>Hostname</dt>\n  <dd>localhost</dd>\n\n  <dt>MongoDB Version</dt>\n  <dd>2.4.7</dd>\n\n  <dt>Uptime</dt>\n  <dd>92455 seconds (1 days)</dd>\n\n  <dt>Server Time</dt>\n  <dd>Sun, 23 Nov 2014 19:13:01 GMT</dd>\n</dl>\n\n<dl>\n  <dt>Connections</dt>\n  <dd>Current: 5<br/>Available: 199</dd>\n</dl>\n\n<dl>\n  <dt>Clients</dt>\n  <dd>Active: 0<br/>  Reading: 0<br/>  Writing: 0</dd>\n</dl>\n\n<dl>\n  <dt>Queues</dt>\n  <dd>Operations:0 <br/>  Read Lock: 0 <br/>  Write Lock: 0</dd>\n</dl>\n\n<dl>\n  <dt>Operation Counts</dt>\n  <dd>Inserts: 14 <br/>  Queries: 6901 <br/>  Updates: 0 <br/>  Deletes: 2</dd>\n</dl>\n\n<dl>\n  <dt>Flush Count</dt>\n  <dd>1047</dd>\n\n  <dt>Last Flush</dt>\n  <dd>Sun, 23 Nov 2014 19:29:46 GMT</dd>\n\n  <dt>Time Spent</dt>\n  <dd>5154 ms</dd>\n\n  <dt>Average Time</dt>\n  <dd>4.922636103151863 ms</dd>\n</dl>\n");
can.stache('main_site_stache', "<nav class=\"navbar navbar-default navbar-fixed-top bg-700\" role=\"navigation\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n\n      <a class=\"navbar-brand\" href=\"#\">localhost</a>\n    </div>\n    <div id=\"navbar\" class=\"navbar-collapse collapse\">\n      <ul class=\"nav navbar-nav\">\n        <li class=\"navbar-select dropdown\">\n          <a href=\"javascript:void(0)\" class=\"dropdown-toggle withripple\" data-toggle=\"dropdown\">mma-db <b class=\"caret\"></b></a>\n          <ul class=\"dropdown-menu\">\n              <li><a href=\"javascript:void(0)\" class=\" withripple\">bchm</a></li>\n              <li><a href=\"javascript:void(0)\" class=\" withripple\">bchm-old</a></li>\n              <li><a href=\"javascript:void(0)\" class=\" withripple\">e-store</a></li>\n              <li><a href=\"javascript:void(0)\" class=\" withripple\">feathers</a></li>\n              <li><a href=\"javascript:void(0)\" class=\" withripple\">kardon-db</a></li>\n              <li><a href=\"javascript:void(0)\" class=\" withripple\">mma-db</a></li>\n              <li><a href=\"javascript:void(0)\" class=\" withripple\">tv-guide</a></li>\n          </ul>\n        </li>\n      </ul>\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li class=\"icon-only\"><a href=\"#\"><i class=\"mdi-action-help\"></i> </a></li>\n        <li class=\"icon-only\">\n          <a href=\"javascript:void(0)\" class=\"dropdown-toggle withripple\" data-toggle=\"dropdown\"><i class=\"mdi-action-account-box\"></i></a>\n          <ul class=\"dropdown-menu\">\n              <li><a href=\"javascript:void(0)\">Users</a></li>\n              <li><a href=\"javascript:void(0)\">Logout</a></li>\n          </ul>\n          </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n\n\n<!-- CONTENT -->\n<div id=\"content\" class=\"container-fluid main\"> </div>\n\n"); 
})(this);