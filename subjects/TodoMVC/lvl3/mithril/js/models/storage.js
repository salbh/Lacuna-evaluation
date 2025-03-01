'use strict';
var app = app || {};

(function () {
	var STORAGE_ID = 'todos-mithril';
	app.storage = {
		get: function () {
			return JSON.parse(localStorage.getItem(STORAGE_ID) || '[]');
		},
		put: null
	};
})();
