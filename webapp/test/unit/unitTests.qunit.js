/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"Neoris/invoices/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
