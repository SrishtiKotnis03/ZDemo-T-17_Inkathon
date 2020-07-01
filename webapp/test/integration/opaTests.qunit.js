/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"com/demo/ZDemo_T17_Inkathon/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});